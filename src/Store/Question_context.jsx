import React from "react";

const QuestionContext = React.createContext({
    questionsWithAnswered:[],
    addAnswerToQuestion:()=>{},
    removeQuestion:()=>{},
});

export default QuestionContext;