
const mongoose = require("mongoose")
exports.connectDatabase = async()=>{
    //connecting to database
    //await -> jaba samma database connect hudaina wait garne
await mongoose.connect("mongodb+srv://gshix:gshix@cluster0.6gvox8o.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
console.log("Database connected succesfully")


}