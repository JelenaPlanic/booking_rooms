const joinBookingAndRoom = 
{
    $lookup: {
        localField: "roomID",
        foreignField: "_id",
        from: "rooms",
        as: "myRooms",
        pipeline: [
            {
                $project:
                {
                    image: 1,
                    roomNumber: 1,
                    roomType: 1,
                    _id: 1
                }
            }
        ]
    }
}

module.exports = {joinBookingAndRoom};