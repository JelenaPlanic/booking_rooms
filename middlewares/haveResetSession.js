const haveResetSession = (req, res, next) => {
    if(req.session.hasOwnProperty("resetCode"))
    {
        next();
    }
    else
    {
        res.redirect("/");
    }
} ;

module.exports = haveResetSession;