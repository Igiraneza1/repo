import { CreateProduct, getAllProduct} from "../controllers/ProductController";
import express from "express";
import configureMulter from "../utils/Multer.js";
const productRouter = express();

productRouter.post("createProduct", upload, createProduct);
productRouter.get("getAllProduct", getAllProduct);

const upload = configureMulter();

export default productRouter;