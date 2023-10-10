const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const updateProfile = require("../middlewares/updateProfile");
const router = Router();

router.get("/", verifyAuth, require("../controllers/room/renderRoomPage"));
router.get("/allRooms", verifyAuth, require("../controllers/room/renderAllRoomsPage"));
router.get("/edit/:id", verifyAuth, require("../controllers/room/renderEditRoomPage"));

router.post("/add",verifyAuth, require("../controllers/room/addRoom"));
router.post("/edit/:id", verifyAuth, updateProfile, require("../controllers/room/updateRoom"));

module.exports = router;