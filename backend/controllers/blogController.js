import Blog from '../models/blogModel.js'

export const createBlogPost = async (req, res) => {
    req.body.createdBy = req.user._id;
    req.body.image = req.image
    const blog = await Blog.create(req.body)
    res.status(201).json(blog)
}