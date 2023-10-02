const KB = 1024; //kb ima bajtova
const MB = 1024 * KB; //
const VALID_TYPE = ["jpeg","jpg","png"];
const {UPLOAD_DIR} = require("../../config/config");
const fs = require("fs");

const addRoom = (req, res) => {
    const inputData = req.body;
    const file = req.files; // mora da se instalira  express-fileupload, zbog formi i atributa enctype="multipart/form-data"

    console.log(inputData);
    console.log(file);


    let error = [];

    // kako da upload sliku? dobila sam iz req.files object!
    // validacija slike:
    let {name, size } = file.image;
    let mimetype = file.image.mimetype.split("/")[1];

    if(size > 3* MB) // size je u bajtovima, dobijam koliko je 3 mb u bajtovima
    {
        error.push("File is too big!");
    }
    if(!VALID_TYPE.includes(mimetype))
    {
        error.push("File is not valid type!");
    }

    if(fs.existsSync(UPLOAD_DIR))
    {
        console.log("postoji");
    }

    if(error.length === 0) // ovde uploadujem sliku
    {
        // metoda da taj file sacuvamo negde na serveru, u direktorijumu:
        file.image.mv(UPLOAD_DIR +"/" + name, (err) => { // 1. arg lokacija dire
            if(err)
            {
                console.log(err);
                res.render("error", {error: error});
            }
            else
            {
                  // kako ja da znam odakle sam uputio req, mozda hocu da ga redirekt na istu stranicu!
                 res.redirect(req.headers.referer);
            }
        })       
    }
    else
    {
        console.log(error);
        res.render("error", {error: error});
    }

};

module.exports = addRoom;