import { CreateContact, getAllContact, getContactById,deleteContactById, updateContactById } from "../controllers/contactController.js";

import express from "express";
import { admin } from "../middlewares/roleIdentification.js";
import { auth } from "../middlewares/tokenVerification.js";
const contactRouter = express();


contactRouter.post('/createContact', CreateContact);
contactRouter.get("/getAllContact", admin,auth, getAllContact);
contactRouter.get("/getContactById/:id" , admin, auth, getContactById);
contactRouter.delete("/deleteContactById/:id", admin,auth, deleteContactById);
contactRouter.put("/updateContactById/:id", admin,auth, updateContactById);

export default contactRouter;