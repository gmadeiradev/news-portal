module.exports = (application) => {
  // form add news route
  application.get("/form-add-news", (req, res) => {
    res.render("admin/form-add-news");
  });

  application.post("/news/save", (req, res) => {
    let news = req.body;

    req.assert("title", "Title is required").notEmpty();
    req.assert("abstract", "Abstract is required").notEmpty();
    req.assert("abstract", "The abstract must content among 10 and 100 characters").len(10, 100);
    req.assert("author", "Author is required").notEmpty();
    req.assert("date_news", "Date is required").notEmpty();
    req.assert("news", "News is required").notEmpty();

    let err = req.validationErrors();

    if (err) {
      res.render("admin/form-add-news", { validation: err });
      return;
    }

    // connection
    let connection = application.config.dbConnection();
    // model
    let NewsGroupDAO = new application.app.models.NewsGroupDAO(connection);
    // saveNews
    NewsGroupDAO.saveNews(news, (err, result) => {
      if (err) {
        throw err;
      }
      // select view
      res.redirect("/news-group");
    });
  });
};
