const {Schema, model} = require("mongoose");
const {roles, DEFAULT_USER_IMAGE} = require("../config/config");

const UserSchema = new Schema({
    firstName : {type: String, default : ""},
    lastName : {type: String, default : ""},
    mobile : {type: String, default : ""},
    email : {type: String, required: [true, "Email is required"]},
    password: {type: String, required: [true, "Password is required"]},
    description : {type: String, default: null},
    gender : {type: String, default: null},
    address: {type: String, default: null},
    role :{type: String, default: roles.USER},
    birthDate :{type: String, default: null},
    image : {type:String, default: DEFAULT_USER_IMAGE}, // da ima dif sliku
    joiningDate : {type:Date, default: ()=>{
    
         return new Date().getTime();
    }},
    isActivate: {type:Boolean, default: false}
   
});


const UserModel = model("users", UserSchema);

module.exports = UserModel;