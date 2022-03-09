const express = require("express");
var db = require("./database_mysql")

const cors = require("cors");
const logger = require("morgan");

var product = require("./database_mysql");
const app = express();
const PORT = process.env.PORT || 5000;

//routes
const userroutes = require("./routes/product.routes.user.js");
const staduimroutes = require("./routes/staduimroutes.js");
const eventroutes = require("./routes/eventroutes.js");
const teamroutes = require("./routes/teamroutes.js");

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/user", userroutes);
app.use("/staduim", staduimroutes);
app.use("/event", eventroutes);
app.use("/team", teamroutes);
app.get("/",(req, res)=> {
  let query = "SELECT * FROM stadium;";

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return
    }
    console.log("saduims: ", result);
    res.status(200).send(result);
  });
})
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});
