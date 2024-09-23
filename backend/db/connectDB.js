import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected successfully...");
        
    }catch(error){
        console.log(error);S
    }
}

export default connectDB;