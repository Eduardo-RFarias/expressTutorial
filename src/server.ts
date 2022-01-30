import express from "express";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import createError from "http-errors";

import indexRouter from "./routes/indexRoute";
import apiRouter from "./routes/apiRoute";

const server = express();

//* Middlewares
server.use(morgan("tiny"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
server.use(express.static(path.resolve(__dirname, "public")));

//* The routes are being created in the routes folder
server.use("/", indexRouter);
server.use("/api", apiRouter);

//* As the last url, we consider it a 404 error
server.all("*", (req, res) => {
  const error = createError(404, `Path "${req.url}" not found in this server.`);

  res.status(error.status);

  if (process.env.DEBUG) {
    return res.send(error.stack);
  }

  return res.send(error.message);
});

export default server;
