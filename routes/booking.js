const {Router} = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

//GET:
router.get("/addBooking", verifyAuth, require("../controllers/booking/renderAddBookingPage"));


//POST:
router.post("/addBooking", verifyAuth, require("../controllers/booking/addBooking"));



module.exports = router;