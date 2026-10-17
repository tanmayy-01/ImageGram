import multer from "multer";
import { allowedMimeTypes } from "../constants";

const storage = multer.memoryStorage();
const uploader = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    fileFilter: (req, file, cb) => {
    // Explicitly check for jpeg and png only
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG images are allowed!'), false);
    }
  }
})