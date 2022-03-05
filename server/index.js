const express = require("express");

const cors = require("cors");
const logger = require("morgan");

var product = require("./database_mysql");
const app = express();
const PORT = process.env.PORT || 5000;
//routes
const userroutes = require("./routes/product.routes.user.js");
const staduimroutes = require("./routes/staduimroutes.js");


app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/user", userroutes);
app.use("/staduim",staduimroutes)
app.listen(PORT, function () {
  console.log(`listening on :http://localhost:${PORT}`);
});
