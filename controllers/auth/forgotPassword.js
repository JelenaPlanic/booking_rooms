const { BASE_URL } = require("../../config/config");
const sendMail = require("../../lib/sendMail");
const UserModel = require("../../models/UserModel");
const crypto = require("crypto");

const forgotPassword = async (req, res) => {
    let {email} = req.body;

    try
    {
       let foundUser =  await UserModel.findOne({email}); // mozemo da filtiramo sta da nam se vrati od propertija (projection)
        if(!!foundUser) // ili object ili undefined konvertuje u boolean (!! -ako je vrednost budi true )
        {
            // poslati email:
            let generateResetCode = crypto.randomBytes(10).toString("hex");
            req.session.resetCode = {generateResetCode, email}; // kreiran novi object u session
            let html = `
            <p>Click on link to reset password </p>
            <a href="${BASE_URL}/auth/resetPassword?code=${generateResetCode}">Reset link</a>
            `;
            let resultMail = await sendMail({email, subject: "Reset account password", html});

            // odgovor:
            res.render("resetPasswordInfo");
        }
        else
        {
            res.render("error", {error: "User with this email not exists!"});
        }
    } 
    catch (error)
    {
        res.render("error", {error: error.message});
    }
} ;

module.exports = forgotPassword;