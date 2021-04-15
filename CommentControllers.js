// const Joi = require("@hapi/joi");

const CommentModel = require("./CommentModel");

class CommentController {
  getAllComment = async (req, res, next) => {
    try {
      const comment = await CommentModel.find();

      return res.status(200).json(comment);
    } catch (err) {
      return this.errorHandler(res, err);
    }
  };

  createNewComment = async (req, res, next) => {
    try {
      const newComment = await CommentModel.create(req.body);

      return res.status(201).json(newComment);
    } catch (err) {
      return this.errorHandler(res, err);
    }
  };

  errorHandler = (res, err) => {
    return res.status(500).send({ message: err.message });
  };
}

module.exports = new CommentController();
