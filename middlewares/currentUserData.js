const UserModel = require("../models/UserModel");
async function currentUserData(req, res, next)
{
    try
    {
        let user = await UserModel.findOne({_id:req.session.user._id});
        if(!user)
        {
            throw new Error("User not found!");
        }
        // mozda treba da ispraznim locals!
        req.locals = user;
        next();
    }
    catch(error)
    {
        res.status(500).render("error", {error: error.message, user: req.session.user}); // Internal Server Error
    }
}

module.exports = currentUserData;