import React from "react";

const QuestionContext = React.createContext({
    questionsWithAnswered:[],
    currentQuestion :[],
    addToCurrentQuestion:()=>{},
    removeQuestion:()=>{},
});

export default QuestionContext;