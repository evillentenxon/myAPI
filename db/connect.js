const mongoose = require("mongoose"); 

const connectDB= ()=>{
    console.log("connect db");
    return mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });  
};

module.exports= connectDB;

