import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connect to DB")
    } catch (error) {
        console.log(error)
        console.log("Error while connecting to DB")
    }
}