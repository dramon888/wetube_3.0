// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening On: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello My HomPage");

const handleProfile = (req, res) => res.send("Hi my ProfilePage");

const betweenHome = (req, res, next) => {
  console.log("나는 미들웨어야!!!!!잘 기억해 위치도 중요해!");
  next();
};
app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
