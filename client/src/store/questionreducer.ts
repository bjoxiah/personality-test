import { ActionTypes, IActions, IQuestionContext } from "./questioncontext";

// Reducer
export const questionReducer = (state: IQuestionContext, action: IActions) => {
  switch (action.type) {
    case ActionTypes.INITIAL:
      return {...state, ...{questions: action.data, count: action.count}};
    case ActionTypes.SET_CURRENT_QUESTION:
        console.log(action)
        return {...state, ...{current: action.current}};
    case ActionTypes.SET_ANSWER:
        const data = {...state};
        const updateData = data.questions?.map(val => {
            val.answers = (val === action.single) ? action.single.answers : val.answers;
            return val;
        });
        return {...state, ...{questions: updateData}};
    default:
      return state;
  }
};
