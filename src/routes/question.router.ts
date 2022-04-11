import express from "express";
import { questionController } from "../controllers/question.controller";
export const questionRouter = express.Router();

questionRouter.get("/", questionController.index);
questionRouter.get("/:id", questionController.single);
questionRouter.post("/", questionController.create);
questionRouter.put("/:id", questionController.update);
questionRouter.delete("/:id", questionController.destroy);
