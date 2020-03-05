import express from "express";
import routes from "../routes";
import {
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../localsMiddleware";

const videoRouter = express.Router();
// Add
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
// Update
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
