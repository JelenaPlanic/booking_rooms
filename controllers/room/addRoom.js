const fileUpload = require("../../lib/fileUpload"); // asihrona f-ja
const RoomModel = require("../../models/RoomModel"); // baza
const {DEFAULT_ROOM_IMAGE} = require("../../config/config");

// nece dodati u bazu ako nema slike (Ispravi)
const addRoom = async (req, res) => {

    const inputData = req.body;
    const file = req.files; // mora da se instalira  express-fileupload, zbog formi i atributa enctype="multipart/form-data"

    console.log("Room:", inputData);
    console.log("File:",file); //  <input type="file"> forma

    try
    {
        let fileName = await fileUpload(file);
        let newRoom = new RoomModel({...inputData, image: fileName?? DEFAULT_ROOM_IMAGE });
        await newRoom.save();
        res.redirect(req.headers.referer); //  // kako ja da znam odakle sam uputio req, mozda hocu da ga redirekt na istu stranicu!
    }
    catch(error)
    {
        res.render("error", {error: error.message});
    }  

};

module.exports = addRoom;

// Modul express-fileupload:
// Ovaj modul omogućava Express.js aplikaciji da lakše obradi datoteke koje su poslate putem HTML forme sa input poljem tipa file.
// Bez ovog modula, Express ne bi automatski razumeo kako da obrađuje datoteke iz takvih zahteva.