import React, { useReducer, useContext, useEffect, useState } from "react";
import Question_context from "./Questions_context.jsx";
import allQuestions from "../Component/Allquestion/Allquestion.js";
let defaultCartState = { questionsWithAnswered: [], currentQuestion: [] };

const QuestionProvider = (props) => {
  const [state, setState] = useState(defaultCartState);
  const addCurrentQuestion = (id) => {
    const q1 = allQuestions.filter((item) => {
      return item.id === id;
    });

    setState((prevState) => {
      console.log(prevState);
      return { ...prevState, currentQuestion: q1 };
    });
  };
  const removeQuestion = () => {};
  const questionContext = {
    questionsWithAnswered: state.questionsWithAnswered,
    currentQuestion: state.currentQuestion,
    addToCurrentQuestion: addCurrentQuestion,
    removeQuestion: removeQuestion,
  };

  return (
    <Question_context.Provider value={questionContext}>
      {props.children}
    </Question_context.Provider>
  );
};

export default QuestionProvider;
