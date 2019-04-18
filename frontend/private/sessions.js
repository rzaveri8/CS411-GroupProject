const express = require('express');
const session = require('express-session');
const store = require('express-mysql-session');

const credentials = require('./controllers/credentials');

const app = express();

/*
How does the session middleware recognize a user ? 
It stores a `session id` as a cookie on the client side. It does not store the session itself.
When a returning user makes a request, the client sends its cookie to the server, and then 
the session middleware recognizes that session id within the cookie and gets session information 
for that user from its server side store. If you explore browser cookies, 
you discover that for this particular session middleware, the default key for the session id is `connect.sid`.

How do I properly store my sessions ? 
By default this session middleware stores its sessions in memory. That means when quit your Node application, all the session 
information is dumped. When you subsequently restart your Node application, it will generate new session ids for your clients,
and thus you will not be able to recognize returning users. So, to properly store sessions, you need to use a compatible 
session store. https://www.npmjs.com/package/express-session#compatible-session-stores
*/

/* Initialize options for this particular session store, which is mysql-session */

var storeOptions = {
    host: credentials.database.host,
    port: credentials.database.port,
    user: credentials.database.user,
    password: credentials.database.password,
    database: credentials.database.database
}

var sessionStore = new store(storeOptions); //init MySQLStore

/*
Register express-session as middleware. Tells our express app to use sessions for all requests. 
express-session stores its sessions server side, NOT on the client side. By default these sessions are stored in memory.
In this particular example we will override the default and use MySQLStore. Scroll to the end of the file to see a sample
of what the session looks like when it is saved in the store, e.g our MySQL database.
*/
app.use(session({
    secret: "mysecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
        //Settings object for the session id cookie. 
        "maxAge": 86400000 //time in ms // 86,400,000ms === 24 hours

    },
    store: sessionStore
}));


/* Sessions in action */
app.get("/", function(req,res){
    res.setHeader('Content-Type', 'text/html');
    console.log(req.session.id); 
    /*
    If you properly setup the session store, you will notice that your session id stays the same independent of exiting or starting your node application.
    However, this is not always the case. See Caveats at the end of the file for more information 
    */
    if(req.session.views){
        /*
        Here you can see the session in action. We grab the view count from our store for a user and return it here.
         */
        req.session.views++;
        res.write("<p> Page views: " + req.session.views + "</p>"); 
        res.end();
    }
    else{
        req.session.views = 1; //create a key-value pair in your session object to track the number of views for a user
        res.write("<p> Welcome. This is your first visit.")
        res.end()
    }
})

app.listen(3000);

/*
Example of what a session looks like in our database. 
+----------------------------------+------------+------------------------------------------------------------------------------------------------------------------+
| session_id                       | expires    | data                                                                                                             |
+----------------------------------+------------+------------------------------------------------------------------------------------------------------------------+
| Wij2l9KRD64kRVaSbys5LN3MqczAeIWh | 1555201332 | {"cookie":{"originalMaxAge":86400000,"expires":"2019-04-14T00:22:11.822Z","httpOnly":true,"path":"/"},"views":7} |
+----------------------------------+------------+------------------------------------------------------------------------------------------------------------------+

*/

/*
Caveats: 
So now we know how to use sessions. However, I mentioned that sessions can be lost. This is due to the fact that we set an expiry
on our session id cookie, the cookie will be deleted at the expiry time. In this example, we set our expiry to one day from intialization.
The user can also delete cookies manually by clearing their browser cache. In either of these cases, after deletion if the user
revists our app, the session middleware will generate a new session id for them and they will be treated like a new user.

So then how do I make use of sessions ? 
To make use of sessions, we have to register and login our users using some other mechanism. Then, we can take advantage of sessions
to keep track of our user as they are logged in, and also store commonly accessed user information to make it quicker and easier for retrieval. 
*/
