var db = require("../database_mysql");

const insertStaduim = function (req, res) {
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

const selectAllStaduim = function (req, res) {
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
const selectOneStaduim = function (req, res) {
  let query = "SELECT * FROM vamos.stadium where id_stadium=?;";

  db.query(query, [req.params.id_stadium], (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("saduims: ", result);
    res.status(200).send(result);
  });
};

const updateStaduim = (req, res) => {
  let param = [
    req.body.stadium_name,
    req.body.stadiumPicture,
    req.body.typeOfSport,
    req.body.description,
    req.body.city,
    req.body.id_stadium,
  ];

  let query = `UPDATE vamos.stadium SET stadium_name = ? , stadiumPicture = ? ,typeOfSport  = ?,description = ? , city = ? WHERE id_stadium = ? ;`;
  db.query(query, param, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const deleteStaduim = (req, res) => {
  let param = [req.params.id_stadium];

  let query = `DELETE FROM vamos.stadium WHERE id_stadium = ? ;`;
  db.query(query, param, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  insertStaduim,
  selectAllStaduim,
  selectOneStaduim,
  updateStaduim,
  deleteStaduim,
};
