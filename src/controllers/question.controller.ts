import { Request, Response } from "express";
import Questions from "../models/questions";
import { questionService } from "../services/question.service";

export const questionController = {
    index: async (req: Request, res: Response) => {
        try {
            const questions = await questionService.getAll();
            res.status(200).json({ status: 200, message: "Successful", data: questions });
        } catch (err: any) {
            res.status(500).json({ status: err.status, message: err.message, data: null });
        }
    },
    single: async (req: Request, res: Response) => {
        try {
            const questions = await questionService.getSingle(req.params.id);
            res.status(200).json({ status: 200, message: "Successful", data: questions });
        } catch (err: any) {
            res.status(500).json({ status: err.status, message: err.message, data: null });
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const questions = await questionService.createQuestion(req);
            res.status(200).json({ status: 204, message: "Successful", data: questions });
        } catch (err: any) {
            res.status(500).json({ status: err.status, message: err.message, data: null });
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const questions = await questionService.updateQuestion(req);
            res.status(200).json({ status: 200, message: "Successful", data: questions });
        } catch (err: any) {
            res.status(500).json({ status: err.status, message: err.message, data: null });
        }
    },
    destroy: async (req: Request, res: Response) => {
        try {
            await questionService.deleteQuestion(req);
            res.status(200).json({ status: 204, message: "Successful", data: {} });
        } catch (err: any) {
            res.status(500).json({ status: err.status, message: err.message, data: null });
        }
    },
}