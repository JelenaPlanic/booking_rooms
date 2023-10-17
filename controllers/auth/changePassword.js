const bcrypt = require("bcrypt");
const UserModel = require("../../models/UserModel");
const SALT_ROUNDS = 10;

const changePassword = async(req, res) => {
    let {password, confirmPassword} = req.body;
    let {email} = req.session.resetCode;
    try {
        if(confirmPassword === password)
        {
            bcrypt.hash(password, SALT_ROUNDS, async(err, hashPassword) => {
                
             let updateResult = await UserModel.updateOne({email}, {$set:{password: hashPassword} });
             if(updateResult.modifiedCount === 1)
             {
                req.session.destroy(); // dodali smo jos jedan prop u sesiji i unistavamo ga
                res.redirect("/");
             }
                
            })
        }
        else
        {
            res.render("error", {error: "New password and confirm password don't match!"});
        }
        
    } catch (error) {
        res.render("error", {error: error.message});
    }
};

module.exports = changePassword;