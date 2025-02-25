import { CreateProduct, getAllProduct} from "../controllers/ProductController";
import express from "express";
import configureMulter from "../utils/Multer";
const productRouter = express();

productRouter.post("createProduct", createProduct)


export default productRouter;