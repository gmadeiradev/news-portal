const app = require("./config/server");

// set port
app.listen(8089, () => {
  console.log("Server ON! (PORT: 8089)");
});
