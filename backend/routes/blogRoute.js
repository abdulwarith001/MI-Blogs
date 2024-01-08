import { Router } from "express";
import { createBlogPost } from "../controllers/blogController.js";
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

export default router;
