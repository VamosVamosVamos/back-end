const router = require("express").Router();
const staduimControler = require("../controllers/controlerStaduim");

router.post("/addStaduim",staduimControler.addStaduim)
router.get("/addStaduim",staduimControler.getStaduim)


module.exports = router;