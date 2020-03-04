import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos });
  }
};

export const search = (req, res) => {
  //   const searchingBy = req.query.term; es5 문법
  const {
    query: { term: searchingBy }
  } = req;

  // searchingBy
  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos: videos
  });
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  console.log("바디의 제목,상세설명:", title, description, "파일경로:", path);
  //To Do: Upload and save video
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "videoDetail", video });
    console.log(video);
  } catch (error) {
    console.log(error);
    res.render(routes.home);
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
