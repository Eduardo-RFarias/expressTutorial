import express from "express";

const index: express.RequestHandler = (req, res) => {
  res.status(200).send("Home page");
};

export default {
  index,
};
