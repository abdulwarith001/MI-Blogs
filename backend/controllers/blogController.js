import Blog from '../models/blogModel.js'
import { NotFoundError } from '../errors/customErrors.js';

export const createBlogPost = async (req, res) => {
    req.body.createdBy = req.user._id;
    req.body.postedBy = req.user.blogName
    req.body.image = req.image
    const blog = await Blog.create(req.body)
    res.status(201).json(blog)
}

export const getLatestBlogPost = async (req, res) => {
    const blog = await Blog.find({}).sort('-createdAt').limit(5)
    if(!blog) throw new NotFoundError('No blog posts is available')
    res.status(200).json(blog)
}

export const getOwnersBlogPost = async (req, res) => {
    const filter = {createdBy: req.user._id}
    const blogs = await Blog.find(filter).sort('-createdAt')
    if (blogs.length < 1) throw new NotFoundError("No blog posts is available");
    res.status(200).json({total: blogs.length, data:blogs})
};

export const getPostByName = async (req, res) => {
  const decodedTitle = decodeURIComponent(req.query.title);

  // Perform a case-insensitive search for similar titles
  const filter = { title: new RegExp(decodedTitle, "i") };

  const blog = await Blog.findOne(filter);

  if (!blog) {
    throw new NotFoundError("This blog is unavailable");
  }

  res.status(200).json(blog);
};

export const deletePostById = async (req, res) => { 
     const { id } = req.params;
     const blog = await Blog.findByIdAndDelete(id);
     if (!blog) {
       throw new NotFoundError("Blog Not Found");
     }
     res.status(200).json({ message: "Blog deleted Successfully" });
}

export const createReaction = async (req, res) => {
  const { postId } = req.query;
  const { reaction } = req.body;

  // Validate the reaction or handle invalid cases
  const validReactions = ["like", "love", "excellent"]; // Add other valid reactions as needed
  if (!validReactions.includes(reaction)) {
    return res.status(400).json({ error: "Invalid reaction type" });
  }

  // Update the post in your database with the incremented reaction count
  const updatedBlog = await Blog.findByIdAndUpdate(
    postId,
    { $inc: { [`reactions.${reaction}`]: 1 } },
    { new: true }
  );

  if (!updatedBlog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  // Send the updated Blog as a response
  res.status(200).json(updatedBlog);
}