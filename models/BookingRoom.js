const {Schema, model} = require("mongoose"); // cuvamo rezervisane sobe

const BookingSchema = new Schema(
    {
        roomId:{type: Schema.Types.ObjectId, required: true},
        guestId: {type: Schema.Types.ObjectId, required: true},
        startDate:{type: Date, required: true},
        endDate: {type: Date, required: true},
        price:{type:Number, required: true}       
    },
    {
        timestamps:true
    }
);

const BookingModel = model("bookingRooms", BookingSchema);

module.exports = BookingModel;