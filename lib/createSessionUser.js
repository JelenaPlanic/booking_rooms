const createSessionUser = (findUser) => {
    
    return {
        _id: findUser._id,
        firstName: findUser.firstName,
        role: findUser.role,
        image: findUser.image
        };
};

module.exports = createSessionUser;