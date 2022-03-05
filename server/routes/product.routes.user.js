const router = require("express").Router();
const userControle = require("../controllers/controlerUser");

router.post("/signUpUser", userControle.signUp);
router.post("/loginUser", userControle.login);

// router.get("/getAllStudium",userControle.getAllStuduim)
// router.post("/event",userControle.addEvent)
// router.get("/")

module.exports = router;
