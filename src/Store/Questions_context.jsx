import React from "react";

const QuestionContext = React.createContext({
  totalQuestion: [],
  currentQuestion: [],
  answeredQuestion: [],
  markedForReviewQuestion: [],
  notVisitedQuestion: [],
  currentQuestionIndex: 0,
  totalQuestionStatusChange: () => {},
  addToCurrentQuestion: () => {},
  addToAnsweredQuestion: () => {},
  removeQuestion: () => {},
  modifyQuestionIndex:()=>{}
});

export default QuestionContext;
