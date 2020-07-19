// index.js


/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const compression = require('compression');
const helmet = require('helmet');


 
/**
 * App Variables
 */
// create instance of express application, stored in app
var app = express();
// define port the server will use to listen for request
const port = process.env.PORT || "8000";


 
/**
 * App configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());
app.use(helmet());



 /**
 * Routes Defintion
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home"});
});

app.get("/user", (req, res) => {
  res.render("user", {title: "Profile", userProfile: { nickname: "Auth0" } });
})


 /**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
});


module.exports = app;
