function NewsGroupDAO(connection) {
  this._connection = connection;
}

// news group
NewsGroupDAO.prototype.getNewsGroup = function (callback) {
  this._connection.query("SELECT * FROM news", callback);
};
// news
NewsGroupDAO.prototype.getNews = function (callback) {
  this._connection.query("SELECT * FROM news WHERE id_news = 2", callback);
};
// save news
NewsGroupDAO.prototype.saveNews = function (news, callback) {
  //***IMPORTANT! -> it is necessary for the JSON to have the same name as the table columns as the variable label
  // take the JSON and transform to string, later substituting on the place of "?"
  this._connection.query("INSERT INTO news SET ?", news, callback);
};

module.exports = () => {
  return NewsGroupDAO;
};
