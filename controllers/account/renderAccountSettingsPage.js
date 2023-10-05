const dayjs = require("dayjs");
const renderAccountSettingsPage = (req, res) => {
    
    res.render("accountSettingsPage", {user: req.locals,dayjs });
} ;

module.exports = renderAccountSettingsPage;