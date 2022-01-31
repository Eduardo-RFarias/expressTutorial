import express from "express";
import controller from "../../controllers/TodoController";

const route = express.Router();

route.route("/").get(controller.list).post(controller.create);
route.route("/:id").put(controller.update).get(controller.retrieve).delete(controller.destroy);

export default route;
