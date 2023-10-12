const BookingModel = require("../../models/BookingRoom");
const addBooking = async (req, res) => {
    
    const bookingData = req.body;
    console.log(bookingData);
    try {
        const newBooking = new BookingModel(bookingData);
        const savedBooking = await newBooking.save();

         // trebalo bi room reserved postaviti na true!
        console.log("Saved booking:", savedBooking);
        res.redirect("/room/allrooms");
    } catch (error) {
        console.log(error.message);
        res.render("error", { user: req.session.user, error: error.message });
    }

} ;

module.exports = addBooking;