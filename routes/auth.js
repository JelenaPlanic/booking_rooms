const {Router} = require("express");
const router = Router();


router.post("/signup", require("../controllers/auth/signUp"));



module.exports = router;