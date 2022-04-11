import mongoose from "mongoose";
import ScoreSchema from "./score";
import Score from "./score";
// Define a schema
var Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  option: { type: String, required: true },
  value: { type: String, required: true },
  selected: { type: Boolean, default: false },
  score: { type: ScoreSchema, required: true }
});

export default AnswerSchema;
