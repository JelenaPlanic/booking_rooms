const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");

const login = async (req, res)=>{

    const {email, password} = req.body; // provera da li postoji user u bazi (po email)

    try
    {
        let foundUser = await UserModel.findOne({email}); // vraca objekat ili null

        if(foundUser) // da li postoji user?
        {
            // 1. nasao sam user-a
            // 2. provera hesovanog pass iz baze da li se poklapa sa ovim unetim pass
            // 3. enkriptovan pass ne moze da vratimo nazad (isti ulaz je uvak razlicit)
            bcrypt.compare(password, foundUser.password, (error, isMatch)=>{ // vraca true/false, da li se matchuju ili ne!
            
                if(error)
                {
                    console.log(error);
                    res.render("error", {error: error.message});
                    return;  // izlazi iz f-on
                }
                if(isMatch) //ULOGOVAN
                {
                    req.session.user = //dostupan session u req, dodajem novi prop
                    {
                        _id: foundUser._id,
                        firstName : foundUser.firstName,
                        role : foundUser.role,
                        image : foundUser.image

                    };
                    res.redirect("/dashboard"); // saljemo ga na ovu stranicu
                }
                else
                {
                    res.render("error", {error: "Credentials not correct, Password is incorrect!!"}); // pass se ne podudara
                }

            })       

        }
        else
        {
            res.render("error", {error: "User with this email not exist!"});
        }
    }
    catch(error)
    {
        console.log(error);
        res.render("error", {error: error.message});
    }


} ;

module.exports = login