const UserModel = require("../../models/UserModel");


const activateAccount = async (req, res) => {
    
    let {id} = req.params;

    try
    {
        let activateStatus = await UserModel.updateOne(
            {
                _id: id
            },
            {
                $set: {isActivate:true}
            }
        );

        if(activateStatus.acknowledged)
        {
            res.render("activateAccount", {activateStatus: "Your account is active!", redirect: "/login", linkCaption: "Go to login"});
        }
        else
        {
            res.render("activateAccount", {activateStatus: "Activation link is not valid!", redirect: "/", linkCaption: "Go to register"});
        }
    } 
    catch (error)
    {
        res.render("error", {
            user: req.session.user,
            error: error.message,
            cbUrl: req.header.referrer // referenca na URL odakle je zahtev dosao
        });
    }


} ;

module.exports = activateAccount;