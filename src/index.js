import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";
import { upload } from "./config/multerConfig.js";

const app = express();
app.use(express.json())

app.post('/posts', upload.single('image'), createPost)

app.listen(PORT,() => {
    console.log("Server start on http://localhost:", PORT)
    connectDB()
})