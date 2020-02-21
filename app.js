// const express = require("express");
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello My HomPage");

const handleProfile = (req, res) => res.send("Hi my ProfilePage");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
