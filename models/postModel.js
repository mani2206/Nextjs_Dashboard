import { Schema ,model,models} from "mongoose";


const postSchema = new Schema(
    {
        title:String,
        description:String,
        image:String
    }
)

 const PostModel =models.Post || model('Post',postSchema)// Note: 'Post' should be capitalized
 export default PostModel;
