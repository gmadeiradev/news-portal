module.exports = () => {
    // news group
    this.getNewsGroup = ((conn, callback) => {
        conn.query("SELECT * FROM news", callback);
    });

    // news
    this.getNews = ((conn, callback) => {
        conn.query("SELECT * FROM news WHERE id_news = 2", callback);
    });

    return this;
};