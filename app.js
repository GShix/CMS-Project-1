const { connectDatabase } = require("./database/database");
// export object baata connectDatabase jhikeko -> Destructuring vanxa eslai
const express = require("express");
const Blog = require("./model/blogModel");
const app = express();

// nodejs lai form bata aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//connecting to database
/* mongoose("mongodb+srv://gshix:7PYU1BqaPwu9b9Pa@cluster0.sohft7s.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    console.log("Database connected succesfully")
})
*/

//Database connection function
connectDatabase();

//GET API
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "This is by Dambar"
    })
})
//GET API => blogs(All blogs)
app.get("/blogs", async (req, res) => {

    //fetching/reading all blogs from Blog_Model
    const blogs = await Blog.find()

    //check if blogs contain data or not
    if (blogs.length == 0) {
        res.json({
            status: 404,
            message: "Empty Blog.",
            data: blogs
        })
    }
    else {
        res.json({
            status: 200,
            message: "Blogs fetched successfully.",
            data: blogs
        })
    }

})

//GET API => Single blog
app.get("/blogs/:id", async (req, res) => {
    const id = req.params.id
    //Alternative : const {id} = req.params

    const blog = await Blog.find({_id:id})
    // Alternative: const blog = await Blog.findById(id)

       if(blog.length == 0){ //checks id's length
        res.status(404).json({
            message : "No blogs found with that id"
        })
       }else{

           res.status(200).json({
               messge : "Blog fetched successfully",
               data : blog
            })
        }
    // ALTERNATIVE 
    // const blog = await Blog.findById(id)
    // if (blog) {
    //     res.status(200).json({
    //         message: "Blog fetched succesfully",
    //         data: blog
    //     })
    // } else {
    //     res.status(404).json({
    //         message: "No blog found"
    //     })
    // }
})

// CREATE BLOG API
app.post("/createBlog", async (req, res) => {
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
        status: 200,
        message: "Blog created successfully"
    })
})
app.listen(2000, () => {
    console.log("This is first CMS Project in Node.js")
})