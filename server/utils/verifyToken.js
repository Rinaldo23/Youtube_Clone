import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    // let token = req.cookies.access_token;
    let token = req.body.token || req.cookies.access_token;
    if(token === undefined){
        token = req.params.token;
    }
    // console.log(token)
    // console.log(req.params)
    if (!token) return next(createError(401, "You are not authenticated!"));

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));

        req.user = user;
        next();
    });
}