import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

dotenv.config({ path: "./config.env" });

// DEV TOOL TO DISPLAY CURRENT REQUEST URL
app.use(morgan("dev"));
app.use(compression());

// BODY PARSER TO GET DATA FROM DB IN JSON FORM
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// COOKIE PARSER
app.use(cookieParser());

export { app };
