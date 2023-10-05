const { Router } = require("express");
const currentUserData = require("../middlewares/currentUserData");
const verifyAccount = require("../middlewares/verifyAuth");
const router = Router();

router.get("/", verifyAccount, currentUserData, require("../controllers/account/renderAccountPage") );
router.get("/settings", verifyAccount, currentUserData, require("../controllers/account/renderAccountSettingsPage") );
router.get("/change_password", verifyAccount, currentUserData, require("../controllers/account/renderChangePasswordPage"));


router.post("/settings", 
verifyAccount, currentUserData,
 require("../controllers/account/updateProfile"), 
 require(
    "../controllers/account/updateProfileData"));

module.exports = router;