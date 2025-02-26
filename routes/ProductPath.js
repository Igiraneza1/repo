import { CreateProduct } from "../controllers/ProductController.js";
import express from "express";
import configureMulter from "../utils/Multer.js";
const productRouter = express();

const upload = configureMulter();

productRouter.post("/createProduct", upload, CreateProduct);




export default productRouter;