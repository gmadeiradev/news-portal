module.exports = () => {
    // news group
    this.getNewsGroup = ((conn, callback) => {
        conn.query("SELECT * FROM news", callback);
    });

    // news
    this.getNews = ((conn, callback) => {
        conn.query("SELECT * FROM news WHERE id_news = 2", callback);
    });

    // save news
    this.saveNews = ((news, conn, callback) => {
        //***IMPORTANT! -> it is necessary for the JSON to have the same name as the table columns as the variable label
        // take the JSON and transform to string, later substituting on the place of "?"
        conn.query("INSERT INTO news SET ?", news, callback);
    });

    return this;
};