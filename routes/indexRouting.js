import express from 'express';
import contactRouter from './contactPath.js';

const mainRouter= express.Router();
mainRouter.use('/contact', contactRouter);
mainRouter.use("product", productRouter)

export default mainRouter;