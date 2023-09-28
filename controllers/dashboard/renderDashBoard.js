const renderDashboard = (req, res)=>{

    let {user}= req.session;

    res.render("dashboard", {user}); // saljem user-a
};

module.exports = renderDashboard