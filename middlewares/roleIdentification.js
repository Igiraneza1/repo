import User from "../controllers/models/userModels.js";

export const admin = (req, res, next) => {
    if (req.user.userRole !== "admin"){
        return res.User.status(403).json({message: "Access denied contact Admin please"});
    }

    next();
};