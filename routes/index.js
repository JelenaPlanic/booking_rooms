const {Router} = require("express");
const verifyAuth = require("../middlewares/verifyAuth");
const router = Router();

router.get("/", (req, res)=>{

    res.render("sign_up");
})

router.get("/login", (req, res)=>{ // staticna ruta

    res.render("login");
});
router.use("/auth", require("./auth"));
router.use("/dashboard",verifyAuth, require("./dashboard"));
router.use("/room", require("./room"));


// bvz URL ADRESA: ruta koja ne postoji, da mi renderuje view 404
// ako ne pronadje nijedan rout, izvrsice se ovaj!
router.use("*", (req, res)=>{

    res.render("404.ejs");
})


module.exports = router;

// rute: staticne i dinamicne(sa params)
// dinamicne rute uvek stavljati ispod staticnih!!! on gleda koja ruta se prva matchuje!