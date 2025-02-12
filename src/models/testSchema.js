import mongoose  from "mongoose";

const postSchema = new mongoose.Schema({
    name:{ type:String, required: false }
})

// const Post = mongoose.model.Post || mongoose.model("Post", postSchema)
const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post