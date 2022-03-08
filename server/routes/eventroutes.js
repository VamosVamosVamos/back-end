const router = require("express").Router();
const controlerEvent = require("../controllers/controlerEvent");

router.post("/addEvent", controlerEvent.addEvent);
router.get("/getEvent", controlerEvent.getEvent);
// router.delete("/deleteEvent", controlerEvent.deleteStaduim);
// router.update("/updateEvent", controlerEvent.updateStaduim);

module.exports = router;
