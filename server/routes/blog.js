const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET all blog posts
router.get("/", async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blog post
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  const newPost = new Blog({ title, content });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
