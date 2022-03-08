var db = require("../database_mysql");

const insertTeam = function (req, res) {
  var team = {
    teamName: req.body.teamName,
    player1: req.body.player1,
    player2: req.body.player2,
    player3: req.body.player3,
    player4: req.body.player4,
    player5: req.body.player5,
    player6: req.body.player6,
    player7: req.body.player7,
    player8: req.body.player8,
    player9: req.body.player9,
    player10: req.body.player10,
    player11: req.body.player11,
    player12: req.body.player12,
  };
  let query = `INSERT INTO vamos.team(teamName,player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12) VALUES ("${team.teamName}","${team.player1}","${team.player2}","${team.player3}","${team.player4}","${team.player5}"),"${team.player6}","${team.player7}","${team.player8}","${team.player9}","${team.player10}","${team.player11}""${team.player12}";`;

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("Created team: ", { id: res.insertId });
    res.status(200).send(`Created team:  {id: ${res.insertId}`);
  });
};

const selectAllTeams = function (req, res) {
  let query = "SELECT * FROM vamos.team;";

  db.query(query, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("team: ", result);
    res.status(200).send(result);
  });
};

const selectOneTeam = function (req, res) {
  let query = "SELECT * FROM vamos.team where id_team=?;";

  db.query(query, [req.params.id_team], (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.status(404).send(err);
      return;
    }
    console.log("team: ", result);
    res.status(200).send(result);
  });
};

const updateTeam = (req, res) => {
  let param = [
    req.body.teamName,
    req.body.player1,
    req.body.player2,
    req.body.player3,
    req.body.player4,
    req.body.player5,
    req.body.player6,
    req.body.player7,
    req.body.player8,
    req.body.player9,
    req.body.player10,
    req.body.player11,
    req.body.player12,
  ];

  let query = `UPDATE vamos.team SET eamName =?,player1=?,player2=?,player3=?,player4=?,player5=?,player6=?,player7=?,player8=?,player9=?,player10=?,player11=?,player12 WHERE id_team= ? ;`;
  db.query(query, param, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const deleteTeam = (req, res) => {
  let param = [req.params.id_team];

  let query = `DELETE FROM vamos.team WHERE id_team= ? ;`;
  db.query(query, param, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  insertTeam,
  selectAllTeams,
  selectOneTeam,
  updateTeam,
  deleteTeam,
};
