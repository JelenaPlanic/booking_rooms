const {Router} = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const haveResetSession = require("../middlewares/haveResetSession");
const router = Router();


//GET:
router.get("/logout", verifyAuth, require("../controllers/auth/logout"));
router.get("/activate/:id", require("../controllers/auth/activateAccount"));
router.get("/resetPassword",haveResetSession, require("../controllers/auth/resetPassword"));

// POST:
router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));
router.post("/forgotPassword", require("../controllers/auth/forgotPassword"));
router.post("/resetPassword", haveResetSession, require("../controllers/auth/changePassword"));



module.exports = router;