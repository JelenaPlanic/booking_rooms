const { roles } = require("../../config/config");
const UserModel = require("../../models/UserModel");

const changeRole = async (req, res) => {
    let {role, id} = req.params;
    let user = req.session.user
    let newRole = role === roles.USER ?  roles.ADMIN : roles.USER;
    try {
        await UserModel.updateOne({_id:id}, {$set: {role :newRole}});
        user._id === id ? req.session.user.role = newRole : null ; // ne saljemo req ka bazi, ka drugom serveru
        res.redirect("/staff");
    
    } catch (error) {
        res.render("error", {user: user, error: error.message});
    }
} ;

module.exports = changeRole;