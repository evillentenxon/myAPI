const mongoose= require("mongoose");

const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,        
    },
    price:{
        type: Number,
        required: [true, "price must be provided"],        
    },
    rating: {
        type: Number,
        default: 4.9,
    }
});

module.exports= mongoose.model("product",productSchema);