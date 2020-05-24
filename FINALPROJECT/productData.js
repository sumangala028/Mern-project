const mongoose = require("mongoose");

const productData = mongoose.Schema({
    Category : {
        type:String,
        required : true,
       
    },

    Name : {
        type:String,
        required : true,
        trim : true
    },

    Price : {
        type : Number,
        required : true
    },

    Discount : {
        type :String,
        required : true
    },

    createdTime : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model("Info", productData);