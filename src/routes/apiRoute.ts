import express from "express";
import todoRoutes from "./api/TodoRoute";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API Root");
});

router.use("/todo", todoRoutes);

export default router;
