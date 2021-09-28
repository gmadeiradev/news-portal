const mysql = require("mysql2");

module.exports = () => {
    // db connection - JSON structure
    // *** modify to your credentials ***
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "newsportal"
    });
};
