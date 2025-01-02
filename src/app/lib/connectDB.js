// import mongoose from "mongoose";

// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Mongo db connected successfully.");
//     } catch(error){
//         console.log(error);
//     }
// }

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};

export default connectDB;
