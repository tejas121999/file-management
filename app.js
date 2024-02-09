var bodyParser = require("body-parser");
const routes = require("./Routes/api");
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./Model");
require("dotenv").config();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//   console.log("table is sync");
// });

app.use("/api", routes);

app.get("/get", async (req, res) => {
  return res.status(200).json({ msg: "working success" });
});

module.exports = app;
