import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Mongodb Database ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error in Mongodb ${err}`);
  }
};

export default connectDB;

//************************************************************************** */
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected to:", conn.connection.host);
//     console.log("Base MongoDB URL:", process.env.MONGO_URI);
//   } catch (err) {
//     console.error("MongoDB connection error:", err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
