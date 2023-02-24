import User from "../models/userModel.js";
import { createError } from "../utils/error.js"

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "You can update only your account!"));
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedUser);
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "You can delete only your account!"));
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

export const subscribeUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        return next(createError(500, "You cannot Subscribe to your own channel!"));
    } else {
        try {
            const existsUser = await User.find({ subscribedUsers: { $in: req.params.id } }).limit(20);

            if (!existsUser[0]) {
                await User.findByIdAndUpdate(req.user.id, { $addToSet: { subscribedUsers: req.params.id } });
                await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } });
            } else {
                return next(createError(500, "You are already a Subscriber!"));
            }
            res.status(200).json({
                message: "Subscription successfull"
            });
        } catch (err) {
            next(err);
        }
    }
}

export const unSubscribeUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        return next(createError(500, "You cannot UnSubscribe to your own channel!"));
    } else {
        try {
            const existsUser = await User.find({ subscribedUsers: { $in: req.params.id } }).limit(20);

            if (existsUser[0]) {
                await User.findByIdAndUpdate(req.user.id, { $pull: { subscribedUsers: req.params.id } });
                await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } });
            } else {
                return next(createError(500, "You are not a Subscriber!"));
            }
            res.status(200).json({
                message: "UnSubscribed successfully"
            });
        } catch (err) {
            next(err);
        }
    }
}