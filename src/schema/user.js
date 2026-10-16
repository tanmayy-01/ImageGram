import mongoose from "mongoose";
import { EMAIL_REGEX } from "../constants/regex.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    validate: {
      validator: function (email) {
        return EMAIL_REGEX.test(email);
      },
      message: "Invalid email format"
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  }
});

const user = mongoose.model("User", userSchema); // User Collection

export default user;
