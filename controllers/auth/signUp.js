const UserModel = require("../../models/UserModel");
const sendMail = require("../../lib/sendMail");
const bcrypt = require("bcrypt");
const { BASE_URL } = require("../../config/config");
const saltRounds = 10; // konf

const signUp = async (req, res)=>{

    const {email, password, confirmPassword} = req.body;
   


    if(password === confirmPassword) // dalja procedura registracije
    {
        try
        {                                                         // provera da li imamo email u bazi, slanje req
            let isExist = await UserModel.count({email:email}); // provera koliko ima usera sa email u bazi, vraca int
        
            if(isExist === 0) // nemamo ga u bazi
            {
                
                bcrypt.hash(password, saltRounds, async(err, hashPassword)=>{ // callBack nije asihr, pravimo!
                    if(err)
                    {
                        res.render("/error", {error: err.message});
                        return;
                    }
                   let newUser = new UserModel({email, password : hashPassword});
                   let savedUser = await newUser.save();
                   let subject = "Activation account";
                   let html = `
                   <p>Click on activation link, to activate your account </p>
                   <a href ="${BASE_URL}/auth/activate/${savedUser._id}">Activation link<a/>
                   `;
                    // poslati link za verifikaciju:
                    let sendVerifyLink = await sendMail({email, subject, html});
                    console.log(sendVerifyLink);
                    res.redirect("/login");
                });
            }
            else
            {
                res.render("error", {error: "User with this email exists!"});
            }
        }
        catch(error)
        {
            console.log(error);
            res.render("error", {error: error.message});
        }
        
        
    }
    else
    {
        res.render("error");
    }


}

module.exports = signUp;