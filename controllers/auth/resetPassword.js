const resetPassword = (req, res) => {
    const {code} = req.query;
    let {resetCode} = req.session;

    if(code === resetCode.generateResetCode)
    {
        res.render("resetPassword");
    }
    else
    {
        res.render("error", {error: "It's not valid reset link!"});
    }

} ;

module.exports = resetPassword;