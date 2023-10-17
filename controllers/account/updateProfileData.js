const UserModel = require("../../models/UserModel");
const createSessionUser = require("../../lib/createSessionUser");
const { DEFAULT_USER_IMAGE } = require("../../config/config");

const updateProfileData =  (req, res) => {

    let fileName = req.locals.newFileName? req.locals.newFileName : DEFAULT_USER_IMAGE;
    console.log(fileName);
    console.log(req.body);

    
    UserModel.findOneAndUpdate(
        {
            _id:req.locals._id
        },
        {
            $set :{image: fileName, ...req.body}
        },
        {
            new: true
        } 
        )
        .then((foundUser) => {
            console.log("Found:OVAJ DEO", foundUser);
        //    req.session.user = 
        //    {
        //      _id : foundUser._id,
        //      firstName: foundUser.firstName,
        //      role : foundUser.role,
        //      image : foundUser.image

        //    }
            res.redirect("/account");
            
        })
        .catch((error) => {
            console.log(error.message);
            res.render("error", {error});
        })
    
};

module.exports = updateProfileData;