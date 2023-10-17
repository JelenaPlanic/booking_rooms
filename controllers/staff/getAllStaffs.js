const UserModel = require("../../models/UserModel");
const dayjs = require("dayjs");

const getAllStaffs = async (req, res) => {
    
    try 
    {
        let staffs = await UserModel.find({});
        res.render("staff/allStaffs", {staffs, user: req.session.user, dayjs, error: null});
        
    } catch (error) {
        
        res.render("error", {error: error.message});
        
    }
};

module.exports = getAllStaffs;