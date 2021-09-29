module.exports = (application) => {
    // form add news route
    application.get("/form-add-news", (req, res) => {
        res.render("admin/form-add-news");
    });

    application.post("/news/save", (req, res) => {
        let news = req.body;

        // connection
        let conn = application.config.dbConnection();
        // model
        let newsGroupModel = application.app.models.newsGroupModel;
        // saveNews
        newsGroupModel.saveNews(news, conn, (err, result) => {
            if (err) { throw err };
            // select view
            res.redirect("/news-group");
        });
    });
};