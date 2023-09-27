const { connectDatabase } = require("./database/database");

const app = require("express")();


//connecting to database
/* mongoose("mongodb+srv://gshix:7PYU1BqaPwu9b9Pa@cluster0.sohft7s.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    console.log("Database connected succesfully")
})
*/

//Database connection function
connectDatabase();



app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"This is by Dambar"
    })
})

app.listen(2000,()=>{
    console.log("This is first CMS Project in Node.js")
})