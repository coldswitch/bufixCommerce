const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");

//set views engine
app.set("view engine", "ejs");
// set staticfiles
app.use(express.static("public"));

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// initialize our route
app.use("/", routes);

//start our app
module.exports = app;
