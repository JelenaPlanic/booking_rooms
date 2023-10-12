const BookingModel = require("../../models/BookingRoom");
const {joinBookingAndRoom} = require("../../stages/lookup");
const dayjs = require("dayjs");

const renderMyBooking = async (req, res) => {
    const { user } = req.session;
    try 
    {
        let queryMatch = { $match: { $expr: { $eq: ["$guestID", { $toObjectId: user._id }] } } };

        let bookings = await BookingModel.aggregate(
            [
                queryMatch,//upit
                joinBookingAndRoom, // povezivanje          
                {  $project: { guestID: 0} }                  
            ]
        );


        res.render("booking/myBookings", {user, bookings, dayjs});
    }
    catch (error) {
        console.log(error);
        res.render("error", { user, error: error.message });
    }

};

module.exports = renderMyBooking;
// $match: za filtriranje podataka,
// $expr: za izracunavanje izraza, ovde za poredjenje vrednosti
// $eq: za poredjenje jednakosti
// "$guestID: polje u dokumentu koje se poredi,
// $toObjectId: f-ja za konverziju u Object tip
// user._id: pretvoren u ObjectID i poredi se sa vrednoscu polja guestID

// $lookup: za spajanje podataka iz razlicitih kolekcija, "Gledaj u drugu kolekciju"
// localField: polje u trenutnoj kolekciji,
// foreignField : polje u drugoj kolekciji,
// from: ime kolekcije iz koje zelim podatke,
// as: novo polje u kojem ce biti smesteni podaci


// pipeline: niz operacija koji se primenjuje na dokumente
// $project: operacija (prikaz samo odredjenih polja)
// images: 1, polje je ukljuceno (true)



