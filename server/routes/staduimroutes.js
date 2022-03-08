const router = require("express").Router();
const staduimControler = require("../controllers/controlerStaduim");

router.post("/addStaduim", staduimControler.insertStaduim);
router.get("/getAllStaduim", staduimControler.selectAllStaduim);
router.get("/getOneStadium/:id_stadium", staduimControler.selectOneStaduim);
router.put("/updateStaduim/:id_stadium", staduimControler.updateStaduim);
router.delete("/deleteStaduim/:id_stadium", staduimControler.deleteStaduim);

module.exports = router;
