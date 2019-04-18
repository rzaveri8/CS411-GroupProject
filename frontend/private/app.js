
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
app.listen(8081);

/*
To demonstrate the basic functionality of logging in with Linked,
we will use the templating engine Pug to render some barebones pages
*/

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("dist"));

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

/* establish passport and its settings to authenticate users */

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LinkedInStrategy({
    clientID: credentials.linkedIn.apiKey,
    clientSecret: credentials.linkedIn.apiSecret,
    callbackURL: "http://52.14.17.113:8081/auth/callback",
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
  //console.log("Access token: " + accessToken);
    var user = {
        accessToken: accessToken,
        id: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        headline: profile._json.headline,
        location: profile._json.location.name,
        industry: profile._json.industry,
        pictureUrl: profile._json.pictureUrl,
        //url: profile._json.url
      //  industry: industry,
        //pictureUrl: pictureUrl,

    }
  //  console.log(profile);
    'use strict';

const fs = require('fs');

let person1 = {
  accessToken: accessToken,
  id: profile.id,
  firstName: profile.name.givenName,
  lastName: profile.name.familyName,
  location: profile._json.location.name,
  industry: profile._json.industry,
  pictureUrl: profile._json.pictureUrl,
  url: profile._json.url
};

let data = JSON.stringify(person1);
fs.writeFileSync('person1.json', data);
    return done(null,user);
}))

passport.serializeUser(function(user,done){
    /*
    Here we want to save the user in the database if this is their first time logging into our app.
    After doing that, we will invoke done() to tell passport to store the user's id and access token in their session.
    In the session, their id and token will be stored under the user object under the passport object.
    */
   console.log("The user is " + user);


   //connection.connect();
   var checkUserExistsQuery = "SELECT * FROM users WHERE userkey=?";
   database.query(checkUserExistsQuery, [user.id], function(err,results, fields){
       if(err) throw err;
       else{
           if(results.length == 0){
            //New user, insert them into database
            var insertUserQuery = "INSERT INTO users(userKey,firstName,lastName,headline,location,industry,pictureURL) VALUES(?,?,?,?,?,?,?)";
            database.query(insertUserQuery, [user.id,user.firstName, user.lastName,user.headline, user.location, user.industry, user.pictureURL ], function(err,results){
                if(err) throw err; //console.log(results)
            })
           }
           //Else they already exist, no further operations neccessary on user
       }
   })

   //connection.end();

    console.log("User was serialized");
    user = {
        id: user.id,
        token: user.accessToken
    }
    done(null,user);
})
passport.deserializeUser(function(user,done){
    /*
    Deserialize the user's information (id and token) from the session.
    This allows us to access the passport object in the session store as req.user within all requests.
    In this case, the passport object contains a user object.
    */
    done(null,user);
})

//Authentication
app.get("/auth", passport.authenticate('linkedin', {state: 'SOME STATE'}), function(req,res){
    //Redirects to LinkedIn
})

//Callback
app.get("/auth/callback", passport.authenticate('linkedin', {
    successRedirect: "/dashboard",
    failureRedirect: "/"
}));



app.get("/dashboard", function(req,res){
    /*
    If we get here, then the user successfully logged in. For all subsequent requests, we can access their token
    using req.user.token and their id using req.user.id
    */
    res.render("dashboard");

    const token = req.user.token;
    var getProfileUrl = "https://api.linkedin.com/v2/me?oauth2_access_token=" + token;
    request(getProfileUrl, function(error,response,body){
        if(error){
            console.log(error);
        }
        console.log("Response: " + response);
        console.log("Body: " + body);
    });
});


app.get("/logout", function(req,res){
    /*
    Passport exposes a logout() function on the req object. Calling it will delete the user's id and token from their session
    */
    req.logout();
    res.redirect("/");
})


// CONNECTING THE FRONT END
// Catch all other routes and return the index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
