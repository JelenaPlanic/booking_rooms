require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const fileupload = require("express-fileupload");
const {PORT, HALF_DAY, IN_PRODUCTION} = require("./config/config");
const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDb connected");
})
.catch((error)=>{
    console.log(error.message);
})

app.set("view engine", "ejs");

app.use(fileupload()); //NOVO
app.use(session({ // middleware
    name: process.env.SESSION_NAME,
    secret : process.env.SESSION_SECRET, //crypto.createHash("sha256").digest("base64")
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge : HALF_DAY, // = jedan dan koliko ce trajati ova sesija (u milisek 1000mili = 1 sek)
        secure: IN_PRODUCTION // FALSE (jos smo uvek na dev, nemamo https protokol )
    }

}))


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true, limit:"50mb"})); // limit za upload fajlova


app.use("/", require("./routes"));


app.listen(PORT, (error)=>{

    if(error)
    {
        console.log(error.message);
    }
    else
    {
        console.log(`Server running on port: ${PORT}`);
    }
})