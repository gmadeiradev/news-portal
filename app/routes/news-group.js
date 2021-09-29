module.exports = (application) => {
    application.get("/news-group", (req, res) => {
        let conn = application.config.dbConnection();
        let newsGroupModel = application.app.models.newsGroupModel;

        newsGroupModel.getNewsGroup(conn, (err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news-group", { newsGroup: result });
        });
    });
};