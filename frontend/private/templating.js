const express = require('express');
const app = express();

/*
To demonstrate the basic functionality of logging in with Linked,
we will use the templating engine Pug to render some barebones pages
*/

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("dist"));