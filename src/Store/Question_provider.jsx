import React, { useReducer, useContext, useEffect, useState } from "react";
import Question_context from "./Questions_context.jsx";
import allQuestions from "../Component/Allquestion/Allquestion.js";
let defaultCartState = {
  totalQuestion: allQuestions.map((item) => {
    return { ...item, status: "not visited" };
  }),
  currentQuestion: [],
  answeredQuestion: [],
  markedForReviewQuestion: [],
  notVisitedQuestion: [],
  currentQuestionIndex: 0,
};

const QuestionProvider = (props) => {
  const [state, setState] = useState(defaultCartState);
  const addCurrentQuestion = (index) => {
    const q1 = [state.totalQuestion[index]];
    console.log(q1);
    setState((prevState) => {
      return { ...prevState, currentQuestion: q1 };
    });
  };
  const removeQuestion = () => {};
  const questionStatusHandler = (id, enteredStatus) => {
    const updatedQuestion = state.totalQuestion.map((item) => {
      if (item.id === id) {
        return { ...item, status: enteredStatus };
      } else {
        return { ...item };
      }
    });
    setState((prev) => {
      return { ...prev, totalQuestion: updatedQuestion };
    });
  };
  const answerQuestionHandler = (id, answer) => {
    const question = state.totalQuestion.filter((item) => {
      return item.id === id;
    });
    const obj = { question, answer };
    const updatedQuestionAnswer = [...state.answeredQuestion, obj];
    console.log(updatedQuestionAnswer);
    setState((prevState) => {
      return {
        ...prevState,
        answeredQuestion: updatedQuestionAnswer,
      };
    });
  };
  const modifyQuestionIndexHandler = (index) => {
    setState((prevState) => {
      return { ...prevState, currentQuestionIndex: index };
    });
  };
  const questionContext = {
    totalQuestion: state.totalQuestion,
    currentQuestion: state.currentQuestion,
    answeredQuestion: state.answeredQuestion,
    markedForReviewQuestion: state.markedForReviewQuestion,
    notVisitedQuestion: state.notVisitedQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    addToCurrentQuestion: addCurrentQuestion,
    removeQuestion: removeQuestion,
    totalQuestionStatusChange: questionStatusHandler,
    addToAnsweredQuestion: answerQuestionHandler,
    modifyQuestionIndex: modifyQuestionIndexHandler,
  };

  return (
    <Question_context.Provider value={questionContext}>
      {props.children}
    </Question_context.Provider>
  );
};

export default QuestionProvider;
