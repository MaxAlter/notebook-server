const CommentModel = require("./CommentModel");

const getAllComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.find();

    return res.status(200).json(comment);
  } catch (err) {
    return errorHandler(res, err);
  }
};

const createNewComment = async (req, res, next) => {
  try {
    const newComment = await CommentModel.create(req.body);

    return res.status(201).json(newComment);
  } catch (err) {
    return errorHandler(res, err);
  }
};

const errorHandler = (res, err) => {
  return res.status(500).send({ message: err.message });
};

module.exports = {
  createNewComment,
  getAllComment,
};
