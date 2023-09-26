require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const {PORT = 3001} = process.env;  // destrukcija sa dif vrednoscu

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDb connected");
})
.catch((error)=>{
    console.log(error.message);
})

app.set("view engine", "ejs");
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