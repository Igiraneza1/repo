import { createBlog,getAllblog,getBlogById,deleteBlogById} from "../controllers/blogController.js";
import configureMulter from "../utils/Multer.js";
import express from 'express';

const blogRouter=express();

const upload = configureMulter();

blogRouter.post("/createBlog",upload,createBlog);
blogRouter.get("/getAllblog",getAllblog);
blogRouter.get("/getBlogById/:id",getBlogById);
blogRouter.delete("/deleteBlogById/:id",deleteBlogById)
export default blogRouter;