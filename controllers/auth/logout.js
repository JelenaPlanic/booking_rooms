const logout = (req, res)=>{ // treba sesija da se isprazni

    req.session.destroy();
    res.redirect("/");
};

module.exports = logout;