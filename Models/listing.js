const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type :String,
        required : true,
    },
    description : String,
    image :{
        filename:String,
     url:{  default : "https://unsplash.com/photos/a-gazebo-on-a-beach-with-a-view-of-the-ocean-E1C6rA-qIVY",
        type : String,
        required : true,

       set : (v) => 
       v=== ""? "https://unsplash.com/photos/a-gazebo-on-a-beach-with-a-view-of-the-ocean-E1C6rA-qIVY"
       : v},
    },
    price : Number,
    location : String,
    country : String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
