import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Express Todo App");
});

export default router;
