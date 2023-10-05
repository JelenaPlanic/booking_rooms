const dayjs = require("dayjs");
const renderChangePasswordPage = (req, res) => {
    
    res.render("changePassword", {user: req.locals, dayjs});
};

module.exports = renderChangePasswordPage;