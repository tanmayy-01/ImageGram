import multer from "multer";
import { MAX_FILE_SIZE } from "../constants/common.js";

const storage = multer.memoryStorage();
export const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
})