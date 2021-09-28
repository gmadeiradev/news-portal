module.exports = (app) => {
    // news route
    app.get("/news-group", (req, res) => {
        res.render("news/news-group");
    });
}