import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../localsMiddleware";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
