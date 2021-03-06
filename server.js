const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./config/database");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const PORT = process.env.PORT || 8000;
database.connect().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });
});

app.use("", require("./routes/auth"));
app.use("", require("./routes/bookstore"));

module.exports = app;
