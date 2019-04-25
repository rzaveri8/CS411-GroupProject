
const express = require('express');
const session = require('express-session');
const bodyParser= require('body-parser');
const store = require('express-mysql-session');
const request = require('request');

const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const credentials = require('./controllers/credentials');
const database = require('./controllers/dbConnection');
const app = express();
const path = require('path');

const glassdoorCache = require('./glassdoor-access/glassdoor');
const user = require("./controllers/user");

var callbackURL = "";

/* Setup Environment */
var environment = process.env.CurrentEnvironment;

if(environment == undefined){
    //If the environment variable is not set, assume we are in a developer environment
    environment = "dev";
}

if(environment == "dev"){
    app.listen(3000);
    callbackURL = "http://localhost:3000/auth/callback";
}
else{
    app.listen(8081);
    callbackURL = "http://52.14.17.113:8081/auth/callback";
}

app.use(express.static("dist"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


/* establish our store options, session and its options. We will not be setting a cookie expiration for this case. */

var storeOptions = {
    host: credentials.database.host,
    port: credentials.database.port,
    user: credentials.database.user,
    password: credentials.database.password,
    database: credentials.database.database
}

var sessionStore = new store(storeOptions);

app.use(session({
    secret: "velozity",
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* establish passport and its settings to authenticate users */

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LinkedInStrategy({
    clientID: credentials.linkedIn.apiKey,
    clientSecret: credentials.linkedIn.apiSecret,
    callbackURL: callbackURL,
    scope: ['r_basicprofile']
}, function(accessToken, refreshToken, profile, done){
    /*
    This is our verify callback. We use this callback to invoke done()
    to tell passport that we successfully authenticated the user.
    The first argument can be used to log errors, and is null otherwise.
    Use the second argument to tell passport what we want it to save after authentication
    to help us identify the user
    (e.g user_id, username, email)
    */
    var userDataFromLinkedIn = {
        accessToken: accessToken,
        id: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        headline: profile._json.headline,
        location: profile._json.location.name,
        industry: profile._json.industry,
        pictureUrl: profile._json.pictureUrl,
        resumeGrade: null
    }
    return done(null,userDataFromLinkedIn);
}));

passport.serializeUser(function(user,done){
    /*
    Here we want to save the user in the database if this is their first time logging into our app.
    After doing that, we will invoke done() to tell passport to store the user's id and access token in their session.
    In the session, their id and token will be stored under the user object under the passport object.
    */
   //"We are going to write the user into the user table, and store their session key in the session store
   console.log("Serializing user");
   var checkUserExistsQuery = "SELECT * FROM users WHERE userKey=?";
   database.query(checkUserExistsQuery, [user.id], function(err,results, fields){
       if(err) throw err;
       else{
           if(results.length == 0){
            //New user, insert them into database
            var insertUserQuery = "INSERT INTO users(userKey,firstName,lastName,headline,location,industry,pictureURL) VALUES(?,?,?,?,?,?,?)";
            database.query(insertUserQuery, [user.id,user.firstName, user.lastName,user.headline, user.location, user.industry, user.pictureUrl ], function(err,results){
                if(err) throw err; //console.log(results)
            })
           }
           /*
           Else they already exist. No further operations are necessary.
           */
       }
   })

    userSaveToSession = {
        id: user.id,
        token: user.accessToken,
    }

    done(null,userSaveToSession);
})

passport.deserializeUser(function(user,done){
    /*
    Deserialize the user's information from the user table for easy access.
    */
    const getUserQuery = "SELECT userKey,firstName,lastName,pictureUrl, headline, industry,location,resumeGrade FROM users WHERE userKey= ? ";
    database.query(getUserQuery, [user.id], function(error, results){
        if(error){
            console.log("Error while fetching user from database");
            return done(error,false);
        }
        else{
            if(results.length > 0){
                var userData = results[0];
                const user = {
                    id: userData.userKey,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    headline: userData.headline,
                    location: userData.location,
                    industry: userData.industry,
                    pictureUrl: userData.pictureUrl,
                    resumeGrade: userData.resumeGrade
                }
                return done(null,user)
            }
        }
    })
})

//Authentication
app.get("/api/auth", passport.authenticate('linkedin', {state: 'SOME STATE'}), function(req,res){
    //Redirects to LinkedIn
})

app.get("/api/user",(req,res)=> {
  //console.log(req.user.headline)
    res.json({id: req.user.id, firstName: req.user.firstName, lastName: req.user.lastName, headline: req.user.headline, location: req.user.location, industry: req.user.industry, pictureUrl: req.user.pictureUrl});
})


//Callback
app.get("/auth/callback", passport.authenticate('linkedin', {
    successRedirect: "http://localhost:4200/dashboard",
    failureRedirect: "/",
    //console.log("success");
}));

/*** OUR APP ENDPOINTS ****/


/*
Route middleware to perform some function before the next middleware is called for this path.
In this case, we protect all endpoints that require user to be logged in.
*/
app.use('/api/', function(req,res,next){
    if(!req.user){
        res.json({status:401, error: "User not logged in.", logInStatus:0});
    }
    else{
        next();
    }
})

/*** Accessing App Data ***/

/*
If we get here then the middleware verified that the user is logged in.
*/
app.get("/api/isLoggedIn", function(req,res){
    res.json({logInStatus:1});
});

app.get("/api/logout", function(req,res){
    /*
    Passport exposes a logout() function on the req object. Calling it will delete the user's id and token from their session
    */
    console.log("Received request to logout user");
    const firstName = req.user.firstName;
    req.logout();
    res.json({status:200, name: firstName});
})

//Test deserializing logic
app.get("/api/printUser", function(req,res){
    res.json(req.user);
})

// Access dashboard
app.get("/api/dashboard", function(req,res){
    const firstName = req.user.firstName;
    const lastName = req.user.lastName;
    const headline = req.user.headline;
    res.json({firstName: firstName, lastName: lastName, headline: headline});
});


/*
Automatic job search. User must have industry/position in their profile to execute auto job search.
Industry/position must be separated by spaces or +'s if more than one word.
*/
app.get('/api/jobs/', function(req,res){
    if(!req.user.industry){
        res.status(400).json("Industry required to execute job search");
        return;
    }
    const endpoint = "http://52.14.17.113:8083/api/jobs/";
    const requestUrl = endpoint + req.user.industry;
    request.get(requestUrl, function(error,response,body){
        if(error){

            res.status(500).json("Server error.");
        }
        else{
            res.status(200).json({data: JSON.parse(body)});
        }
    })
})

/*
Glassdoor search
*/
app.get(["/api/glassdoor/:company/:position","/test/glassdoor/:company/:position"], function(req,res){
    glassdoorCache.getResult(req,res,req.params.company, req.params.position);
})

/*** Updating User Information ***/

app.post("/api/user/setIndustry", function(req,res){
    console.log(req.body.industry);
    if(!req.body.industry){
        res.status(400).json("Please input an industry");
    }
    user.updateIndustry(res,req.user.id, req.body.industry);
})

/*** Accessing User Information ***/
app.get("/api/user/getIndustry", function(req,res){
    const userId = req.user.id;
    user.getIndustry(res,userId);
});


app.post(["/api/user/saveJob", "/test/saveJob"], function(req,res) {
  user.saveJob(req.body.id, req.body.company, req.body.position);
});

app.get(["/api/user/getSaveJob",  "/test/getSaveJob"], function(req,res) {
  user.getSaveJob(req.user.id);
})



app.post("/api/user/setresumegrade", function(req,res) {
  user.updateResumeGrade(res,req.user.id,req.body.grade);
  console.log("The resume grade to set is");
  console.log(req.body.grade);
})

app.get("/api/user/getresumegrade", function(req,res){
    const userId = req.user.id;
    user.getResumeGrade(res,userId);
});


/*** CONNECTING TO FRONT END (ANGULAR2) ***/

// Catch all other routes and return the index file
function allFrontEndRoutes(req,res){
    res.sendFile('dist/index.html', { root: '.'});
}

app.use(allFrontEndRoutes);
