const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// app.use("/", (req,res) => {
//     res.json("Hi");
// })

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

//router
const routerInfo = require("./router");
app.use("/info/",routerInfo);

app.listen(5000, () => {
    console.log("Server started on 5000");
})

//database
mongoose.connect("mongodb://localhost/products" , (err) => {
    if(!err){
        console.log("DB connected successfully!");
    }
})