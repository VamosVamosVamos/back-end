var db = require("../database_mysql");

const addStaduim = function (req, res) {
  var staduim = {
    stadium_name: req.body.stadium_name,
    stadiumPicture: req.body.stadiumPicture,
    typeOfSport: req.body.typeOfSport,
    description: req.body.description,
    city: req.body.city,
  };
  let query = `INSERT INTO vamos.stadium(stadium_name,stadiumPicture,typeOfSport,description,city) VALUES ("${staduim.stadium_name}","${staduim.stadiumPicture}","${staduim.typeOfSport}","${staduim.description}","${staduim.city}");`;

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("Created stadium: ", { id: res.insertId });
    res.status(200).send(`Created stadium: :  {id: ${res.insertId}`);
  });
};

const getStaduim = function (req, res) {
  let query = "SELECT * FROM vamos.stadium;";

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("saduims: ", result);
    res.status(200).send(result);
  });
};

module.exports = { addStaduim, getStaduim };
