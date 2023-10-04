const UserModel = require("../../models/UserModel");
const deleteStaff = (req, res) => {
    
    const {id} = req.params;
    const {user} = req.session;

    if(user.role === "admin" || user._id === id)
    {
        UserModel.deleteOne({_id:id})
        .then((result) => {
            console.log("Delete one:", result);
            res.redirect("/staff");
        })
        .catch((error) => {
            res.render("error", {error: error.message});
        });
    }
    else
    {
        res.render("error", {error: "You can't delete user!"});
    }
   
} ;

module.exports = deleteStaff;