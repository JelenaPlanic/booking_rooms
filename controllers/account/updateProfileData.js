const UserModel = require("../../models/UserModel");
const createSessionUser = require("../../lib/createSessionUser");

const updateProfileData =  (req, res) => {

    let fileName = req.locals.newFileName;
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
            console.log("Found:", foundUser);
            req.session.user = createSessionUser(foundUser);
            res.redirect("/account");
            
        })
        .catch((error) => {
            console.log(error.message);
            res.render("error", {error});
        })
    
};

module.exports = updateProfileData;