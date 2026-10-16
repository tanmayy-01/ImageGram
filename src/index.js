import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";

const app = express();

app.get('/',(req,res)=> {
    return res.send("Hello Earth!!")
})

app.listen(PORT,() => {
    console.log("Server start on http://localhost:", PORT)
    connectDB()
})