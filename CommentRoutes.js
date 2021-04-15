const { Router } = require("express");
const CommentControllers = require("./CommentControllers");
const router = Router();

router.get("/all", CommentControllers.getAllComment);

router.post("/new", CommentControllers.createNewComment);

module.exports = router;
