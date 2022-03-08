const router = require("express").Router();
const controlerTeam = require("../controllers/controlerTeam");

router.post("/createTeam", controlerTeam.insertTeam);
router.get("/getAllteams", controlerTeam.selectAllTeams);
router.get("/getOneTeam/:id_team", controlerTeam.selectOneTeam);
router.put("/updateTeam/:id_team", controlerTeam.updateTeam);
router.delete("deleteTeam/:id_team", controlerTeam.deleteTeam);

module.exports = router;
