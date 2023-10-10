require("dotenv").config();

const {PORT = 3000, NODE_ENV = "development"} = process.env; // destrukcija sa dif vrednoscu
const HALF_DAY = 1000 * 60 * 60 *12 ;
const IN_PRODUCTION = NODE_ENV === "production"; // true/false (kada podignemo, automat ce biti za ovaj env dodat product)
const BASE_URL = IN_PRODUCTION ? "" : "http://localhost:3000";


const roles =  // poverljivo
{
    USER : "user",
    ADMIN : "admin"
};

const DEFAULT_USER_IMAGE = "user_avatar.png";
const DEFAULT_ROOM_IMAGE = "room.jpg";
const UPLOAD_DIR ="./public/upload/";
const ROOM_TYPE =["Single", "Double", "Quad", "King", "Suite", "Villa", "Apartments"];

module.exports = {roles, DEFAULT_USER_IMAGE, DEFAULT_ROOM_IMAGE, UPLOAD_DIR, ROOM_TYPE,
     BASE_URL, PORT, HALF_DAY, IN_PRODUCTION};