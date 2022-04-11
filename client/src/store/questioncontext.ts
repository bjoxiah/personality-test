import React, { createContext } from "react";
import { Questions } from "../models/question";

// Action
export type IActions = {
  type: ActionTypes,
  data?: Questions[],
  single?: Questions,
  count: number,
  current: number
} 

// Action Types
export enum ActionTypes {
  INITIAL = "INITIAL",
  SET_ANSWER = "SET_ANSWER",
  SET_COUNT = "SET_COUNT",
  SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION"
}


// Action Creators
export const fetchInitial = (data: Questions[]) => ({
  type: ActionTypes.INITIAL,
  count: data.length,
  current: 0,
  data
});

export const setAnswer = (question: Questions) => ({
  type: ActionTypes.SET_ANSWER,
  count: 0,
  current: 0,
  single: question
});

export const setCurrentQuestion = (current: number) => ({
  type: ActionTypes.SET_CURRENT_QUESTION,
  count: 0,
  current
});


export type IQuestionContext = {
  questions?: Questions[],
  count: number,
  current: number,
  dispatch: React.Dispatch<IActions>
}


export const initialState:IQuestionContext = {
  questions: [],
  count: 0,
  current: 0,
  dispatch: () => ({})
};


export const QuestionContext = createContext<IQuestionContext>(initialState);
