const { Router } = require("express");
const { getAllComment, createNewComment } = require("./CommentControllers");
const router = Router();

router.get("/all", getAllComment);

router.post("/new", createNewComment);

module.exports = router;
