const router = require("express").Router();
const userControle = require("../controllers/controlerUser");
router.post("/signUpUser", userControle.signUp);
router.post("/loginUser", userControle.login);

module.exports = router;
