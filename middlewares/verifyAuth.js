
const verifyAuth = (req, res, next)=>{

    if(req.session.hasOwnProperty('user'))
    {
        next();
    }
    else
    {
        res.redirect("/");
    }

};

module.exports = verifyAuth;