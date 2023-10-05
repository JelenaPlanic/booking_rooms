const fileUpload = require("../../lib/fileUpload");


const updateProfile = (req, res, next) => {

    const profileImage = req.files?  req.files : false;
    const {oldImage, ...userData} = req.body;

    console.log(profileImage);
    console.log(oldImage);


    if(profileImage)
    {
        fileUpload(profileImage, oldImage)
        .then((fileName) => {
            req.locals.newFileName = fileName;
            next();          
        })
        .catch((error) => {
            console.log(error);
            res.render("error", {error});
        })
    }
    else
    {
        next();
    }    
};

module.exports = updateProfile;