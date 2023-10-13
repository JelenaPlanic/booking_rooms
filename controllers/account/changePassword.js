const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const saltRound = 10;
const changePassword = async (req, res) => {

    const {oldPassword, newPassword, confirmNewPassword} = req.body;

    try
    {
        const foundUser = req.locals;
        if(foundUser)
        {
            if(newPassword === confirmNewPassword)
            {
                let isMatch = await bcrypt.compare(oldPassword, foundUser.password);
                if(!isMatch)
                {
                    res.render("error", {error: "Old password is incorrect!"});
                    return;
                }
                let newHashedPassword = await bcrypt.hash(newPassword, 10);
                foundUser.password = newHashedPassword;
                await foundUser.save();
                res.redirect("/account/settings");
            }
            else
            {
                res.render("error", {error: "New password and confirm password do not match!"});
            }
        }
        else
        {
            res.render("error", {error: "User not found!"});
        }       
    } catch (error) {
        console.log(error.message);
        res.render("error", {error: error.message});
    }
};
module.exports = changePassword;