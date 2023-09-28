const {Router} = require("express");
const router = Router();


router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));
router.get("/logout", require("../controllers/auth/logout"));



module.exports = router;