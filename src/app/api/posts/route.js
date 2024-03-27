// Assuming Response object is properly defined and imported
// import connectMongoose from "../../../../utils/connectMongo";
import mongoose from 'mongoose';
import PostModel from "../../../../models/postModel";

export async function GET() {
    try {
        // Connect to MongoDB
        // await connectMongoose();
        await mongoose.connect('mongodb://localhost:27017/nextjs_mongoDb', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
              // Increase query timeout to 30 seconds (30000 milliseconds)
            //   serverSelectionTimeoutMS: 30000,
        });


        // Fetch all posts
        const postData = await PostModel.find({})

        // Return response with fetched data
        return Response.json(postData);
    } catch (error) {
        // Handle errors gracefully
        return Response.json({ message: "Error fetching posts", error: error.message });
    }
}
