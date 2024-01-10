import Blog from '../models/blogModel.js'
import { NotFoundError } from '../errors/customErrors.js';

export const createBlogPost = async (req, res) => {
    req.body.createdBy = req.user._id;
    req.body.image = req.image
    const blog = await Blog.create(req.body)
    res.status(201).json(blog)
}

export const getLatestBlogPost = async (req, res) => {
    const blog = await Blog.find({}).sort('-createdAt').limit(5)
    if(!blog) throw new NotFoundError('No blog posts is available')
    res.status(200).json(blog)
}