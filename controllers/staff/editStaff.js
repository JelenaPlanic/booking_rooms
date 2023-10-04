const UserModel = require("../../models/UserModel");
const fileUpload = require("../../lib/fileUpload");

const editStaff = async (req, res) => {
    let {_id, ...staff} = req.body;
    let file = req.files; // kada nista ne upload, file je null!

    try {

        let fileName = await fileUpload(file);
        let foundedStaff = await UserModel.findOneAndUpdate({_id:_id}, {$set: {staff, image: fileName}});
        console.log(foundedStaff);
        res.redirect("/staff");
        
    } catch (error) {
        res.render("error", { error: error.message });
    }
    
};

module.exports = editStaff;