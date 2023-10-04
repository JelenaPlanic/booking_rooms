const UserModel = require("../../models/UserModel");

const getAllStaffs = async (req, res) => {
    
    try 
    {
        let staffs = await UserModel.find({});
        res.render("staff/allStaffs", {staffs, user: req.session.user});
        
    } catch (error) {
        
        res.render("error", {error: error.message});
        
    }
};

module.exports = getAllStaffs;