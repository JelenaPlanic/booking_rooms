const {Router} = require("express");
const router = Router();

router.get("/", require("../controllers/dashboard/renderDashBoard"));


module.exports = router;