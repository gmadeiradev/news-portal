const express = require("express");
const consign = require("consign");

const app = express();
// set view engine to ejs
app.set("view engine", "ejs");

// set views property
app.set("views", "./app/views");

// auto load
// scam application and include into server
consign()
    .include("app/routes")
    .then("config/dbConnection.js") // need extension .js
    .then("app/models")
    .into(app);

module.exports = app;