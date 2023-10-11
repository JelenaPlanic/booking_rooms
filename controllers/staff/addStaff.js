const UserModel = require("../../models/UserModel");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const sendMail = require("../../lib/sendMail");
const {BASE_URL, DEFAULT_USER_IMAGE} = require("../../config/config");
const saltRound = 10;



const addStaff = async (req, res) => {
    const {email} = req.body;

    let generatedRandomNumber = crypto.randomBytes(5).toString("hex");
    console.log("generatedRandomNumber:", generatedRandomNumber);

    let fileName = req.locals && req.locals.newFileName ? req.locals.newFileName : DEFAULT_USER_IMAGE;

    try
    {
        let isExist = await UserModel.count({email: email});
        if(isExist === 0)
        {
            bcrypt.hash(generatedRandomNumber, saltRound, async(error, hashPassword) => {
                
                if(error)
                {
                    console.log("bcrypt:",error.message);
                    res.render("error", {error: error.message});
                    return;
                }

                let newUser = new UserModel({...req.body, password:hashPassword, image : fileName});
                let savedUser = await newUser.save();

                let subject = "Activation account";
                let html = `
                <p>Click on activation link, to activate your account </p>
                <p> Your password is : ${generatedRandomNumber} </p>
                <a href ="${BASE_URL}/auth/activate/${savedUser._id}">Activation link</a>                
                `;

                let sendVerifyEmail = await sendMail(
                    {
                        email,
                        subject, 
                        html
                    }
                );

                res.redirect("/staff/allStaff");

            })
        }
        else
        {
            res.render("error", {error: "User with this email exists!"});
        }
    }
    catch(error)
    {
        console.log("Error message:", error.message);
        res.render("error", {error: error.message});
    }   
} ;

module.exports = addStaff;