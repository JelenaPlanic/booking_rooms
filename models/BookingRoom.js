const {Schema, model} = require("mongoose"); // cuvamo rezervisane sobe

const BookingSchema = new Schema(
    {
        roomID:{type: Schema.Types.ObjectId, required: true}, // soba koja je rezervisana
        guestID: {type: Schema.Types.ObjectId, required: true}, // gost koji je napravio rezervaciju
        startDate:{type: Date, required: true},
        endDate: {type: Date, required: true},
        price:{type:Number, required: true}       
    },
    {
        timestamps:true // opcioni objekat
    }
);

const BookingModel = model("bookingRooms", BookingSchema);

module.exports = BookingModel;