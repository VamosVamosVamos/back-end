const path = require("path");
const express = require("express");

const cors = require("cors");
const logger = require("morgan");

var product = require("./database_mysql");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const PORT = process.env.PORT || 5000;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
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
app.listen(PORT, function () {
  console.log(`listening on :http://localhost:${PORT}`);
});
