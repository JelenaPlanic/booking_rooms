const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const updateProfile = require("../middlewares/updateProfile");
const router = Router();


//GET:
router.get("/", require("../controllers/staff/getAllStaffs"));
router.get("/delete/:id", require("../controllers/staff/deleteStaff"));
router.get("/edit/:id", require("../controllers/staff/renderEditStaffPage"));

//POST:
router.post("/edit", updateProfile, require("../controllers/staff/editStaff"));

module.exports = router;