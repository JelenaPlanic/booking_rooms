const UserModel = require("../../models/UserModel");
const createSessionUser = require("../../lib/createSessionUser");

const editStaff = async (req, res) => {

    console.log("Pogadja");
    let {_id, ...staff} = req.body;
    
    let fileName = req.locals && req.locals.newFileName ? req.locals.newFileName : req.session.user.image;
    console.log("Edit Staff (fileName):", fileName);


    if(req.session.user._id === _id || req.session.user.role === "admin")
    {
        try 
        {
            let foundedStaff = await UserModel.findOneAndUpdate(
                {_id:_id},
                {$set: {image: fileName, ...staff}}, // id se ne menja!
                {new: true}
                );

            console.log("Edit staff:", foundedStaff);
            res.redirect("/staff");
            
        } catch (error) {
            res.render("error", { error: error.message });
        }
    }
    else
    {
        res.render("error", {error: "You can't change data!"})
    }   
};

module.exports = editStaff;