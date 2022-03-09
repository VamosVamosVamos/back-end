const express = require("express");
var db = require("./database_mysql")
const cors = require("cors");
const logger = require("morgan");
var product = require("./database_mysql");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//routes
const userroutes = require("./routes/product.routes.user");
const staduimroutes = require("./routes/staduimroutes");
const eventroutes = require("./routes/eventroutes");
const teamroutes = require("./routes/teamroutes");

app.use(logger("dev"));
app.use("/user", userroutes);
app.use("/staduim", staduimroutes);
app.use("/event", eventroutes);
app.use("/team", teamroutes);
app.get("/",(req, res)=> {
  var query = "SELECT * FROM stadium"

  db.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }else{
    res.status(200).send(result);
    }
  });
})
app.listen(PORT, function () {
  console.log(`listening on http://localhost:${PORT}`);
});
