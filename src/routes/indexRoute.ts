import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Home page");
});

router.get("/about", (req, res) => {
  res.status(200).send("About");
});

export default router;
