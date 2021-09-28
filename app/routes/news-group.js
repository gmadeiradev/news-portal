module.exports = (app) => {
    app.get("/news-group", (req, res) => {
        let conn = app.config.dbConnection();
        let newsGroupModel = app.app.models.newsGroupModel;

        newsGroupModel.getNewsGroup(conn, (err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news-group", { newsGroup: result });
        });
    });
};