const RoomModel = require("../../models/RoomModel");

const updateRoom = async (req, res) => {
    const {id} = req.params;
    const {oldImage, ...roomToUpdate} = req.body;
    const image  = req.locals?.newFileName? req.locals.newFileName : oldImage;

    console.log("ID:", id);
    console.log("Room to update:", roomToUpdate);

    try 
    {
        let updatedRoom = await RoomModel.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: {...roomToUpdate, image: image}
            }, 
            {
                new: true
            }
        );

        res.redirect("/room/allRooms");

    } catch (error) {
        res.render("error", {error: error.message});
    }
};

module.exports = updateRoom;