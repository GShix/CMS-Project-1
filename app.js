const { connectDatabase } = require("./database/database");
// export object baata connectDatabase jhikeko -> Destructuring vanxa eslai
const express = require("express");
const Blog = require("./model/blogModel");
const app = express();

// nodejs lai form bata aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//connecting to database
/* mongoose("mongodb+srv://gshix:7PYU1BqaPwu9b9Pa@cluster0.sohft7s.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    console.log("Database connected succesfully")
})
*/

//Database connection function
connectDatabase();

//GET API
app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"This is by Dambar"
    })
})

// CREATE BLOG API
app.post("/createBlog",async (req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;
    //Insert to database logic goes here
    await Blog.create({
        title: title,
        subtitle: subTitle,
        description: description
    })
    res.json({
        status:200,
        message: "Blog created successfully"
    })
})
app.listen(2000,()=>{
    console.log("This is first CMS Project in Node.js")
})