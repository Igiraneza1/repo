import User from "../controllers/models/userModels.js";

export const Admin = (req, res, next) => {
    if (req.userRole !== "admin"){
        return res.User.status(403).json({message: "Access denied contact Admin please"});

    }

    next();
};