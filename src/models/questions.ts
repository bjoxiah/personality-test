import mongoose from "mongoose";
import AnswerSchema from "./answers";
// Define a schema
var Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  answers: [{ type: AnswerSchema, required: true }]
},{
    timestamps: true,
    minimize: true
});

const Question = mongoose.model('Question', QuestionSchema );

export default Question;
