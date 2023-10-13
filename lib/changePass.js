const UserModel = require("../../models/UserModel");
const bcrypt = require("bcrypt");
const saltRound = 10;
const changePassword = async (req, res) => {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  const userId = req.session.user._id;
  try {
    const foundUser = await UserModel.findOne({ _id: userId });
    console.log("foundedUser", foundUser);
    if (foundUser) {
      if (newPassword === confirmNewPassword) {
        bcrypt.compare(
          oldPassword,
          foundUser.password,
          async (err, isMatch) => {
            console.log("isMatch", isMatch);
            if (err) {
              res.render("error", { error: err.message });
              return;
            }
            if (isMatch) {
              bcrypt.hash(newPassword, saltRound, async (err, hashPassword) => {
                console.log("hashPassword", hashPassword);
                if (err) {
                  res.render("error", { error: err.message });
                  return;
                }
                foundUser.password = hashPassword;
                await foundUser.save();
                res.redirect("/dashboard");
              });
            } else {
              res.render("error", { error: "Incorrect old password!" });
            }
          }
        );
      } else {
        res.render("error", {
          error: "New password and confirm password do not match!",
        });
      }
    } else {
      res.render("error", { error: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    res.render("error", { error: "catch Error" });
  }
};
module.exports = changePassword;
