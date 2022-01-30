import express from "express";

const index: express.RequestHandler = (req, res) => {
  res.status(200).send("Api router");
};

const search: express.RequestHandler = (req, res) => {
  const queryParams = req.query;
  const urlParams = req.params;

  res.status(200).json({ queryParams, urlParams });
};

export default {
  index,
  search,
};
