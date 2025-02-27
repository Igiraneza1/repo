import { CreateContact, getAllContact, getContactById,deleteContactById, updateContactById } from "../controllers/contactController.js";

import express from "express";
import { Admin } from "../middlewares/roleIdentification.js";
import { auth } from "../middlewares/tokenVerification.js";
const contactRouter = express();


contactRouter.post('/createContact', CreateContact);
contactRouter.get("/getAllContact",auth, getAllContact);
contactRouter.get("/getContactById/:id", auth, getContactById);
contactRouter.delete("/deleteContactById/:id",auth, deleteContactById);
contactRouter.put("/updateContactById/:id",auth, updateContactById);

export default contactRouter;