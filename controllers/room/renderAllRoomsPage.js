const RoomModel = require("../../models/RoomModel");

const renderAllRoomsPage = async (req, res) => {
    
    try
    {
        let rooms = await RoomModel.find({});
        res.render("allRooms", {user: req.session.user, rooms});
    }
    catch(error)
    {
        res.render("error", {error: error.message, user: req.session.user});
    }

} ;

module.exports = renderAllRoomsPage;