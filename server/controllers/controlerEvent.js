var db = require("../database_mysql");

const addEvent = function (req, res) {
  var Event = {
    id_team_one: req.body.id_team_one,
    id_team_two: req.body.id_team_two,
    id_stadium :req.body.id_stadium ,
    dateevent: req.body.dateevent,
    departevent: req.body.departevent,
    finishevent: req.body.finishevent,
    advance: req.body.advance,
    staduim: req.body.staduim,
  };
  let query = `INSERT INTO vamos.events(id_team_one,id_team_two,id_stadium,dateevent,departevent,finishevent,advance,staduim) VALUES ("${Event.id_team_one}","${Event.id_team_two}","${Event.id_stadium}","${Event.dateevent}","${Event.departevent}","${Event.finishevent}","${Event.advance}","${Event.staduim}");`;

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("Created event: ", { id: res.insertId });
    res.status(200).send(`Created event: :  {id: ${res.insertId}`);
  });
};

const getEvent = function (req, res) {
  let query = "SELECT * FROM vamos.events;";

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("events: ", result);
    res.status(200).send(result);
  });
};

module.exports = { addEvent, getEvent };
