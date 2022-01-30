import express from "express";
import controller from "../controllers/apiController";

const router = express.Router();

router.get("/", controller.index);

router.get("/search/:id", controller.search);

export default router;
