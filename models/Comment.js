import mongoose from "mongoose";

const CommentScema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", CommentScema);
export default model;
