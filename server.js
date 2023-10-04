const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./models/index");

const routes = require("./routes/event");

const app = express();
const port = 8080; // Choose a port number

app.use(cors("http://localhost"));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define a route
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
