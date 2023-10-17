const fileUpload = require("../lib/fileUpload");


const updateProfile = (req, res, next) => {

    const file = req.files?  req.files : false;
    console.log("File: ", file);
    const {oldImage} = req.body;

    console.log("Old image :",oldImage);
    if(file)
    {
        fileUpload(file, oldImage)
        .then((fileName) => {
            //console.log("FileName:", fileName);
            req.locals.newFileName = fileName;
            next();          
        })
        .catch((error) => {
            console.log(error);
            res.render("error", {error:error.message});
        })
    }
    else
    {
        next();
    }    
};

module.exports = updateProfile;