const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.get("/", verifyAuth, require("../controllers/room/renderRoomPage"));
router.get("/allRooms", verifyAuth, require("../controllers/room/renderAllRoomsPage"));

router.post("/add",verifyAuth, require("../controllers/room/addRoom"));

module.exports = router;