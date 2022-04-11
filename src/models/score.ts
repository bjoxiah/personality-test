import mongoose from "mongoose";
// Define a schema
var Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  introvert: { type: Number, required: true },
  extrovert: { type: Number, required: true }
});

export default ScoreSchema;
