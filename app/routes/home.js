module.exports = (app) => {
    // home route
    app.get("/", (req, res) => {
        res.render("home/index");
    });
}