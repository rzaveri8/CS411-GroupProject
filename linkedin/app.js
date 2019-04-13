const express = require('express');
const session = require('express-session');
const bodyParser= require('body-parser');

const passport = require('passport'); 
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const credentials = require('./controllers/credentials');
const database = require('./controllers/dbConnection');
const app = express();

app.listen(3000);

/*
To demonstrate the basic functionality of logging in with Linked, 
we will use the templating engine Pug to render some barebones pages
*/

app.set("view engine", "pug");
app.set("views", "./views");


/* establish our session and its options. We will not be setting a cookie expiration for this case. */
app.use(session({
    secret: "velozity",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));

/* establish passport and its settings to authenticate users */

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LinkedInStrategy({
    clientID: credentials.linkedIn.apiKey,
    clientSecret: credentials.linkedIn.apiSecret,
    callbackURL: "http://localhost:3000/auth/callback",
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
    console.log("Access token: " + accessToken);
    var user = {
        accessToken: accessToken,
        id: profile.id,
        firstName: profile.localizedFirstName,
        lastName: profile.localizedLastName
    }
    return done(null,user);
}))

passport.serializeUser(function(user,done){
    /* 
    Here we want to save the user in the database if this is their first time logging into our app.
    Then, we need to store their id and access token in our session.
    After doing that, we will invoke done() to tell passport that all subsequent requests will use req.user 
    to get the user's access token and id
    */
   var checkUserExistsQuery = "SELECT * FROM users WHERE userkey=?";
   database.query(checkUserExistsQuery, [user.id], function(err,results, fields){
       if(err) throw error;
       else{
           console.log(results);
       }
   })
    console.log("User was serialized");
    done(null,user);
})

passport.deserializeUser(function(user,done){
    console.log("User deserialized");
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
}))

app.get("/", function(req,res){
    res.sendFile("/Users/manujadesilva/Desktop/CS411/semester-project/linkedin/views/login.html");
})

app.get("/dashboard", function(req,res){
    res.render("dashboard");
});

