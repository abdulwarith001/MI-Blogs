import mongoose from "mongoose";
import time from '../utils/time.js'

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    image: {
      type: Map,
      of: String,
      required: [true, "Pls upload an image"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Pls provide who created this blog post"],
    },
    created: {
      type: String,
      default: time,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
