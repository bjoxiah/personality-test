// /**
//  * Data Model Interfaces
//  */
// import { Questions } from "../models/questions";

import Question from "../models/questions";
import { Request } from "express";

// /**
//  * In-Memory Store
//  */
// let questions: Questions[] = [
//   {
//     question: "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
//     answers: [
//       { option: "A", value: "Don't dare to interrupt them", selected: false },
//       { option: "B", value: "Think it's more important to give them some of your time; work can wait", selected: false },
//       { option: "C", value: "Listen, but with only with half an ear", selected: false },
//       { option: "D", value: "Interrupt and explain that you are really busy at the moment", selected: false }
//     ]
//   },
//   {
//     question: "You've been sitting in the doctor's waiting room for more than 25 minutes. You:",
//     answers: [
//       { option: "A", value: "Look at your watch every two minutes", selected: false }, 
//       { option: "B", value: "Bubble with inner anger, but keep quiet", selected: false }, 
//       { option: "C", value: "Explain to other equally impatient people in the room that the doctor is always running late", selected: false }, 
//       { option: "D", value: "Complain in a loud voice, while tapping your foot impatiently", selected: false }
//     ]
//   },
// ];

/**
 * Service Methods
 */
export const questionService = {
  getAll: async () => await Question.find({}),

  getSingle: async (id: string) => await Question.findById(id),

  createQuestion: async (req: Request) => {
    return Question.create(req.body);
  },

  updateQuestion: async (req: Request) => {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body);
    return await question.save();
  },

  deleteQuestion: async (req: Request) => await Question.findByIdAndDelete(req.params.id)
}
