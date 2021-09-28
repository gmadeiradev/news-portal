const dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
    let conn = dbConnection();

    app.get("/news-group", (req, res) => {
        conn.query("SELECT * FROM news", (err, result) => {
            if (err) { throw err };
            // select view
            res.render("news/news-group", { news: result });
        });
    });
};