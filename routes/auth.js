const {Router} = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();


router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));
router.get("/logout", verifyAuth, require("../controllers/auth/logout"));



module.exports = router;