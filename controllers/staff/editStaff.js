const UserModel = require("../../models/UserModel");
const fileUpload = require("../../lib/fileUpload");
const { DEFAULT_USER_IMAGE, UPLOAD_DIR } = require("../../config/config");
const fs = require("fs");

const editStaff = async(req, res) => {

    let {_id, image, oldImage,joiningDate, ...staff} = req.body;
    let file = req.files;
    let oldImagePath = UPLOAD_DIR + "/" + oldImage;
    
    if(req.session.user._id === _id || req.session.user.role === "admin")
    {
        try 
        {
            if(req?.files?.image)
            {
                let fileName = await fileUpload(file);
                let updateStaff = await UserModel.findOneAndUpdate(
                    {_id:_id},
                    {$set: {image: fileName, ...staff}}, // id se ne menja!
                    {new: true}
                    );
                    console.log("Edit staff:", updateStaff);
                    // brisanje slike:

                let imageExist = fs.existsSync(oldImagePath) // proveravamo da li postoji file:
                if(imageExist && oldImage !== DEFAULT_USER_IMAGE)
                {
                     fs.unlinkSync(oldImagePath);   
                }                   
                res.redirect("/staff");
            }

            if(!req?.files?.image)
            {
                let updateStaff = await UserModel.findOneAndUpdate(
                    {_id:_id},
                    {$set: {...staff}}, // id se ne menja!
                    {new: true}
                    );
                    console.log("Edit staff:", updateStaff);
                    res.redirect("/staff");
            }         
            
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