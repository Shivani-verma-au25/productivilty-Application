import mongoose from "mongoose";    

export const dbConnection = async () =>{
    try {
        const dbIntance = await mongoose.connect(process.env.DATABSE_URL);
        console.log("Database connected to:", dbIntance.connection.host);   
    } catch (error) {
        console.log('❌ Error while connecting to db',error);
        process.exit(1);
    }
}