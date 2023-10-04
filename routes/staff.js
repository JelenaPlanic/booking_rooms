const { Router } = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();


//GET:
router.get("/", verifyAuth, require("../controllers/staff/getAllStaffs"));
router.get("/delete/:id",verifyAuth, require("../controllers/staff/deleteStaff"));
router.get("/edit/:id", verifyAuth,require("../controllers/staff/renderEditStaffPage"));

//POST:
router.post("/edit", verifyAuth, require("../controllers/staff/editStaff"));

module.exports = router;