const renderAddStaffPage =  (req, res) => {
    
    res.render("staff/addStaffPage", {user: req.session.user});
};

module.exports = renderAddStaffPage;