import { CreateProduct } from "../controllers/ProductController.js";
import express from "express";
import { Admin } from "../middlewares/roleIdentification.js";
import { auth } from "../middlewares/tokenVerification.js";
import configureMulter from "../utils/Multer.js";
const productRouter = express();

const upload = configureMulter();

productRouter.post("/createProduct", upload,auth, CreateProduct);





export default productRouter;