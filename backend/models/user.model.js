import mongoose from "mongoose";

const ogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
  og: ogSchema,
});

export const User = mongoose.model("user", userSchema);
