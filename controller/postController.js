const Post = require("../models/Post");

// Get All Post
const post_all = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single Post
const post_details = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single Post
const post_single = async (req, res) => {
  const { post_title } = req.params;

  Product.findOne({ slug: post_title }, function(error, post) {
    if (error) return next(error);

    if (!post) {
     return res.status(404).json({message: 'Product data not found.'})
    }

    res.status(200).send(post);
  });
};

// Add New Post
const post_create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    details: req.body.details,
    slug: req.body.title,
  });

  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update Post
const post_update = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      image: req.body.image,
      details: req.body.details
    };

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      post
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete Post
const post_delete = async (req, res) => {
  try {
    const removePost = await Post.findByIdAndDelete(req.params.postId);
    res.json(removePost);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  post_create,
  post_all,
  post_details,
  post_update,
  post_delete,
  post_single
}