const mysql = require("mysql2");

const connMySQL = () => {
    // verify connection
    console.log("Connected to MySQL!");
    // db connection - JSON structure
    // *** modify to your credentials ***
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Sulore#3145",
        database: "newsportal"
    });
};

module.exports = () => {
    console.log("Autoload: connect module with database loaded!");
    return connMySQL;
};
