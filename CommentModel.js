const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
