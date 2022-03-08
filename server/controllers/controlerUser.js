var db = require("../database_mysql");
const bcrypt = require("bcrypt");
const signUp = function (req, res) {
  var sql = "SELECT * FROM user WHERE LOWER(email) = LOWER(?)";
  console.log(req.body);
  db.query(sql, [req.body.email], (err, result) => {
    if (err) {
      console.log("ok");
      res.status(500).send(err);
    } else {
      if (result.length) {
        res.status(200).send("This user is already in use!");
      } else
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          var params = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            adress: req.body.adress,
            city: req.body.city,
            phoneNumber: req.body.phoneNumber,
          };
          console.log(params);
          db.query(`INSERT INTO user Set ? `, params, (err, result) => {
            if (err) {
              throw err;
            } else {
              res.status(201).send("The user has been registerd with us!");
            }
          });
        });
    }
  });
};

const login = (req, res, next) => {
  var params = {
    email: req.body.email,
    password: req.body.password,
  };
  sql = "SELECT * FROM user WHERE email =?";
  db.query(sql, [req.body.email], (err, result) => {
    // user does not exists
    if (err) {
      res.send(err);
    } else {
      if (!result.length) {
        res.send("email or password is incorrect!");
      } else {
        bcrypt.compare(
          params.password,
          result[0]["password"],
          (bErr, bResult) => {
            // wrong password
            if (bResult) {
              res.send("welcome");
            } else {
              res.send("email or password is incorrect!");
            }
          }
        );
      }
    }
  });
};
module.exports = { signUp, login };
