const mongoose=require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type: String
    },
    subtitle:{
        type: String
    },
    description:{
        type: String
    }
}, {
    timestamps: true
})
const Blog = mongoose.model("Blog",blogSchema)
// Alternative
// module.exports = mongoose.model("Blog",blogSchema)
module.exports = Blog