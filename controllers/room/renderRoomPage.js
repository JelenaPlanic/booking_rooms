const { ROOM_TYPE } = require("../../config/config");

const renderRoomPage = (req, res) => {
    
    res.render("addRoom",{user: req.session.user, roomType:ROOM_TYPE} );
};

module.exports = renderRoomPage;