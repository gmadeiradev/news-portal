module.exports = (application) => {
    // form add news route
    application.get("/form-add-news", (req, res) => {
        res.render("admin/form-add-news");
    });

    application.post("/news/save", (req, res) => {
        let news = req.body;

        // connection
        let connection = application.config.dbConnection();
        // model
        let NewsGroupDAO = new application.app.models.NewsGroupDAO(connection);
        // saveNews
        NewsGroupDAO.saveNews(news, (err, result) => {
            if (err) { throw err };
            // select view
            res.redirect("/news-group");
        });
    });
};