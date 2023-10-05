const dayjs = require("dayjs");

const renderAccountPage = (req, res) => {
    
    res.render("accountPage", {user:req.locals, dayjs});
} ;

module.exports = renderAccountPage;