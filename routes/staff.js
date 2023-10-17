const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const updateProfile = require("../middlewares/updateProfile");
const isAdmin = require("../middlewares/isAdmin");
const router = Router();


router.use(verifyAuth);
//GET:
router.get("/", require("../controllers/staff/getAllStaffs"));
router.get("/delete/:id", require("../controllers/staff/deleteStaff"));
router.get("/edit/:id", require("../controllers/staff/renderEditStaffPage"));
router.get("/addStaff",require("../controllers/staff/renderAddStaffPage"));

//POST:
router.post("/edit", require("../controllers/staff/editStaff"));
router.post("/addStaff", updateProfile, require("../controllers/staff/addStaff"));
router.post("/changeRole/:role/:id", isAdmin, require("../controllers/staff/changeRole") ); // samo admin da menja uloge

module.exports = router;