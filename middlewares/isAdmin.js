const { roles } = require("../config/config");
const UserModel = require("../models/UserModel");
const dayjs = require("dayjs");

const isAdmin = async (req, res, next) => {
    if(req.session.user.role === roles.ADMIN)
    {
        next();
    }
    else
    {
        let staffs = await UserModel.find({});
        res.render("staff/allStaffs", {staffs, user: req.session.user,dayjs, error: "Only admin can change role!"});
    }
} ;

module.exports = isAdmin; (req, res, next) => {
    
}