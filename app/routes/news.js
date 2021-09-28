module.exports = (app) => {
    app.get("/news-group", (req, res) => {
        let conn = app.config.dbConnection();

        conn.query("SELECT * FROM news", (err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news-group", { news: result });
        });
    });
};