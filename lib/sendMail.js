const nodeMailer = require("nodemailer"); // slanje email-a pomocu Gmail servera

const transporter = nodeMailer.createTransport(
    {
        // host: "smtp.gmail.com", // host GMAIL SMTP SERVERA
        // port: 587 ,  // Port za Gmail SMTP server
        // secure: true, // Koristi TLS (Transport Layer Security)
        service: "gmail",
        auth:
        {
            user:"jelena.jeca.planic@gmail.com",
            pass: "gpwl yabj albo giti"
        }

    }
);

const sendMail = async ({email, subject, html}) => // EMAIL PRIMAOCA, PREDMET PORUKE, SADRZAJ PORUKE
{
    const newMail = await transporter.sendMail({
        to:email,
        from: "Booking Spice Hotel <jelena.jeca.planic@gmail.com>",
        subject,
        html
    });

    return newMail;
};


module.exports = sendMail;