const KB = 1024; // 1 kilobajt jednak 1024 bajta
const MB = 1024 * KB; // 1 MB = 1048576 bajtova

const VALID_TYPE = ["jpeg", "jpg", "png"];
const {UPLOAD_DIR} = require("../config/config"); // ./public/upload

const fs = require("fs");
const path = require("path");



const fileUpload = async (file) => { // obrada i validacija fajlova (fajl je arg)
    let {name, size} = file.image; // size je u bajtovima
    let mimeType = file.image.mimetype.split("/")[1]; // ["image", "jpeg"]; // koja vrsta datot je u pitanju

    let extname  = path.extname(name); // odredj exr datot slika.jpg = .jpg
    let error = [];

    if(size > 3 * MB)
    {
        error.push("File is too big!");
    }
    if(!VALID_TYPE.includes(mimeType))
    {
        error.push("File is not valid type!");
    }
    if(!fs.existsSync(UPLOAD_DIR))
    {
        fs.mkdir(UPLOAD_DIR);
    }

    if(error.length === 0) // cuvanje file na odredjenom mestu, na serveru
    {
        let fileName = new Date().getTime() + extname; // novi naziv file

        return new Promise((resolve, reject) => {
            
            file.image.mv(UPLOAD_DIR + "/" + fileName, (err) => { // mv = move(asihrona)
                if(err)
                {
                    reject(err.message); // prosledjujemo err iz sistema
                }
                else
                {
                    resolve(fileName); // prosledj naziv datoteke
                }
            })
        })
    }
    else 
    {
        return new Error(error.join(" ")); // join: uzima sve elemente iz array i spaja ih u 1 string koristeci razmak izmedju svakof elem
    }
};


// nije obavezno da asinhrona funkcija vraća Promise
module.exports = fileUpload; // vraca ILI promise ili objekat greske!