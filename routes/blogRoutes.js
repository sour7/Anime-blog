const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes
// GET || all blogs
router.get("/all", getAllBlogsController);

//POST || create blog
router.post("/create", createBlogController);

//PUT || update blog
router.put("/update/:id", updateBlogController);

//GET || SIngle Blog Details
router.get("/get/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("/delete/:id", deleteBlogController);

module.exports = router;
