const {Schema, model} = require("mongoose");
const {DEFAULT_ROOM_IMAGE, ROOM_TYPE} = require("../config/config");


const RoomSchema = new Schema(
    {
        roomNumber : {type: Number, default:null},
        roomType : {type:String, enum: ROOM_TYPE},
        ac: {type:String, default:false},
        meal : {type:String, required: true},
        badCapacity : {type:String, required: true},
        telNumber:  {type:String, default: null},
        rentPerNight:  {type: Number, default:null},
        image : {type: String, default:DEFAULT_ROOM_IMAGE},
        desc:  {type: String, default:null},
        cancellation :  {type: String, default:null},
        reserved: {type:Boolean, default:false}
        
    }
);

const RoomModel = model("rooms", RoomSchema);

module.exports = RoomModel;