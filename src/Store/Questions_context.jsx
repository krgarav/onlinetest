import React from "react";

const QuestionContext = React.createContext({
  totalQuestion: [],
  currentQuestion: [],
  answeredQuestion: [],
  markedForReviewQuestion: [],
  notVisitedQuestion: [],
  totalQuestionStatusChange:()=>{},
  addToCurrentQuestion: () => {},
  addToAnsweredQuestion:()=>{},
  removeQuestion: () => {},
});

export default QuestionContext;
