import React, { Fragment, useEffect, useState } from "react";
import allQuestions from "../Allquestion/Allquestion";
import classes from "./QuestionContent.module.css";
import QuestionContext from "../../Store/Questions_context";
import { useContext } from "react";
function QuestionContent(props) {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(2);
  const [selectedOption, setSelectedOption] = useState(null);
  const contextState = useContext(QuestionContext);

  useEffect(() => {
    contextState.addToCurrentQuestion(1);
  }, []);

  console.log(contextState);
  const handleOptionChange = (e) => {
    setSelectedOption((value) => {
      console.log(e.target.value);
      return (value = e.target.value);
    });
  };
  const singleQuestion = contextState.currentQuestion.map((item, index) => {
    return (
      <div key={index}>
        <h1>Question No {item.id} </h1>
        <hr />
        <h4>
          Q{item.id} {item.question}
        </h4>

        <form>
          <ul className={classes.option}>
            <li>
              <input
                type="radio"
                name={`question_${item.id}`}
                value={item.options.opt1}
                checked={selectedOption === item.options.opt1}
                onChange={handleOptionChange}
              />
              <label>{item.options.opt1}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${item.id}`}
                value={item.options.opt2}
                checked={selectedOption === item.options.opt2}
                onChange={handleOptionChange}
              />
              <label>{item.options.opt2}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${item.id}`}
                value={item.options.opt3}
                checked={selectedOption === item.options.opt3}
                onChange={handleOptionChange}
              />
              <label>{item.options.opt3}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${item.id}`}
                value={item.options.opt4}
                checked={selectedOption === item.options.opt4}
                onChange={handleOptionChange}
              />
              <label>{item.options.opt4}</label>
            </li>
          </ul>
        </form>
      </div>
    );
  });

  const prevClickHandler = () => {
    setCurrentQuestionId((prev) => {
      if (prev !== 1) {
        contextState.addToCurrentQuestion(prev - 1);
        return prev - 1;
      } else {
        contextState.addToCurrentQuestion(prev);
        return prev;
      }
    });
  };
  const nextClickHandler = () => {
    setCurrentQuestionId((next) => {
      if (next !== allQuestions.length) {
        contextState.addToCurrentQuestion(next + 1);
        return next + 1;
      } else {
        contextState.addToCurrentQuestion(next);
        return next;
      }
    });
  };
  return (
    <Fragment>
      <div className={classes.question_box}>
        <hr />
        <div className={classes.question_box}>{singleQuestion}</div>
        <hr />
        <div className={classes.button_box}>
          <button onClick={prevClickHandler}>Prev</button>
          <button className={classes.next_btn} onClick={nextClickHandler}>
            Save & Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default QuestionContent;
