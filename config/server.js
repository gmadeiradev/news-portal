const express = require("express");
const app = express();

// set view engine to ejs
app.set("view engine", "ejs");

// set views property
app.set("views", "./app/views");

module.exports = app;