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
    const blogs = await Blog.find(filter)
    if (blogs.length < 1) throw new NotFoundError("No blog posts is available");
    res.status(200).json({total: blogs.length, data:blogs})
};

export const getPostByName = async(req, res)=>{
    const filter = {title: req.query.title}
    const blog = await Blog.findOne(filter)
    if(!blog) throw new NotFoundError('This blog is unavailable')
    res.status(200).json(blog)
}

export const deletePostById = async (req, res) => { 
     const { id } = req.params;
     const blog = await Blog.findByIdAndDelete(id);
     if (!blog) {
       throw new NotFoundError("Blog Not Found");
     }
     res.status(200).json({ message: "Blog deleted Successfully" });
}