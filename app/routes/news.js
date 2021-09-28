module.exports = (app) => {
    app.get("/news-group", (req, res) => {
        let mysql = require("mysql2");
        // db connection - JSON structure
        let conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "newsportal"
        });

        conn.query("SELECT * FROM news", (err, result) => {
            console.log(err);
            res.send(result);
        });

        // news route
        // res.render("news/news-group");
    });
};