const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{

    res.render("sign_up");
})

router.get("/login", (req, res)=>{

    res.render("login");
})
router.use("/auth", require("./auth"));


module.exports = router;