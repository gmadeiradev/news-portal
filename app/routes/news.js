module.exports = (app) => {
    app.get("/news", (req, res) => {
        let conn = app.config.dbConnection();
        let newsGroupModel = app.app.models.newsGroupModel;

        newsGroupModel.getNews(conn, (err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news", { news: result });
        });
    });
};