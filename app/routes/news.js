module.exports = (app) => {
    app.get("/news", (req, res) => {
        let connection = app.config.dbConnection();
        let NewsGroupDAO = new app.app.models.NewsGroupDAO(connection);

        NewsGroupDAO.getNews((err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news", { news: result });
        });
    });
};