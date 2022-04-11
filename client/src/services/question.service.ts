import { ApiResponse } from "../models/apiresponse";
import { Questions } from "../models/question";

export const QuestionService = {
    getAllQuestions: async (): Promise<ApiResponse<Questions[]>> => {
        const response = await fetch("api/question");
        return await response.json();
    }
}