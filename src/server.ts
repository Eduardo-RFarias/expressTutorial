import express from "express";
import path from "path";
import indexRouter from "./routes/indexRoute";

const server = express();

//* Static resources and Middlewares
server.use(express.static(path.resolve(__dirname, "public")));

//* The routes are being created in the routes folder
server.use("/", indexRouter);

//* If the url is not fit to any route, then use this 404 response
server.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

export default server;
