const app = require("./config/server");
// routes and exe functions
const newsRoute = require("./app/routes/news")(app);
const homeRoute = require("./app/routes/home")(app);
const formAddNewsRoute = require("./app/routes/form-add-news")(app);

// set port
app.listen(8089, () => {
    console.log("Server ON!");
});