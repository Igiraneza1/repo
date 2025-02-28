import express from 'express';
import contactRouter from './contactPath.js';
import productRouter from './ProductPath.js';
import userRouter from './userPath.js';
import blogRouter from './blogPath.js';

const mainRouter= express.Router();
mainRouter.use('/contact', contactRouter);
mainRouter.use("product", productRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/blog", blogRouter);

export default mainRouter;