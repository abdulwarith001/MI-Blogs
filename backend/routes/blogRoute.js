import { Router } from "express";
import {
  createBlogPost,
  deletePostById,
  getLatestBlogPost,
  getOwnersBlogPost,
  getPostByName,
  createReaction,
  getPostById,
  updatePost
} from "../controllers/blogController.js";
const router = Router();
import { validateBlogInput } from "../middlewares/validateMiddleware.js";
import authUser from "../middlewares/authMiddleware.js";
import cloudinaryUpload from "../middlewares/cloudinaryUploaderMiddleware.js";
import upload from "../uploader/multer.js";
import multerError from '../errors/multerError.js'

router.post(
  "/",
  upload.single("image"),
  multerError,
  authUser,
  validateBlogInput,
  cloudinaryUpload,
  createBlogPost
);

router.get('/latest', getLatestBlogPost)
router.get('/',authUser, getOwnersBlogPost)

router.get("/single", getPostByName);
router.delete("/:id", deletePostById)
router.patch('/react', authUser, createReaction)
router.get('/single/:id', authUser, getPostById)

router.patch('/update', upload.single('image'), multerError, authUser, cloudinaryUpload, updatePost)

export default router;
