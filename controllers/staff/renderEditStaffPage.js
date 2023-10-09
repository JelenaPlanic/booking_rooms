const UserModel = require("../../models/UserModel");
const dayjs = require("dayjs");
const renderEditStaffPage = async (req, res) => {
    const {id} = req.params;
    const user = req.session.user;

    try
    {
        const foundedStaff = await UserModel.findOne({_id:id});
        res.render("staff/editStaffForm", {foundedStaff, user, dayjs});

    } catch (error) {
        res.render("error", {error: error.message});
    }

};

module.exports = renderEditStaffPage;