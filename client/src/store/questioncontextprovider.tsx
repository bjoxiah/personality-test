import React, { useEffect, useReducer } from "react";
import { QuestionService } from "../services/question.service";
import { fetchInitial, initialState, QuestionContext } from "./questioncontext";
import { questionReducer } from "./questionreducer";


type QuestionContextProviderProps = {
    children: React.ReactNode
}
  
const QuestionContextProvider = ({ children }: QuestionContextProviderProps) => {
    const [questions, dispatch] = useReducer(questionReducer, initialState);

    const fetchAuthenticatedUser = async () => {
        try {
          const questionData = await QuestionService.getAllQuestions()
          dispatch(fetchInitial(questionData.data));
        } catch (e) {

        }
    };

    useEffect(() => {
        fetchAuthenticatedUser();
    }, []);  
         
    return (
        <QuestionContext.Provider value={{...questions, dispatch}}>
            {children}
        </QuestionContext.Provider>
    )
  }

  export default QuestionContextProvider;
