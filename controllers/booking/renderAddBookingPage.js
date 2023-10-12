const RoomModel = require("../../models/RoomModel");
const renderAddBookingPage = async (req, res) => {
    const {user} = req.session;

    try {
        let allRooms = await RoomModel.find({});
        res.render("booking/addBookingPage", {user, allRooms});

    } catch (error) {
        console.log(error.message);
        res.render("error", {error: error.message});
    }

} ;

module.exports = renderAddBookingPage;