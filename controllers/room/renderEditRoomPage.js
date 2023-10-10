const { ROOM_TYPE } = require("../../config/config");
const RoomModel = require("../../models/RoomModel");

const renderEditRoomPage = async (req, res) => {

    const {id} = req.params;
    try 
    {
        const room = await RoomModel.findOne({_id: id});
        res.render("editRoomPage", {user: req.session.user, room, roomType: ROOM_TYPE});
        
    } catch (error) {
        res.render("error", {error: error.message});
    }

} ;

module.exports = renderEditRoomPage;