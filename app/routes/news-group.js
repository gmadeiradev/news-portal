module.exports = (application) => {
  application.get("/news-group", (req, res) => {
    let connection = application.config.dbConnection();
    // open an instance
    let NewsGroupDAO = new application.app.models.NewsGroupDAO(connection);

    NewsGroupDAO.getNewsGroup((err, result) => {
      if (err) {
        throw err;
      }
      // select view
      res.render("news/news-group", { newsGroup: result });
    });
  });
};
