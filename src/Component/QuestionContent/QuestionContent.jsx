import React, { Fragment, useEffect, useState } from "react";
import allQuestions from "../Allquestion/Allquestion";
import classes from "./QuestionContent.module.css";
import QuestionContext from "../../Store/Questions_context";
import { useContext } from "react";
function QuestionContent() {
  const [selectedOption, setSelectedOption] = useState(null);
  const contextState = useContext(QuestionContext);

  useEffect(() => {
    contextState.addToCurrentQuestion(1);
    setSelectedOption(null);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption((value) => {
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
                id={`question_${item.id}_opt1`}
                name={`question_${item.id}`}
                value={item.options.opt1}
                checked={selectedOption === item.options.opt1}
                onChange={handleOptionChange}
              />
              <label htmlFor={`question_${item.id}_opt1`}>
                {item.options.opt1}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id={`question_${item.id}_opt2`}
                name={`question_${item.id}`}
                value={item.options.opt2}
                checked={selectedOption === item.options.opt2}
                onChange={handleOptionChange}
              />
              <label htmlFor={`question_${item.id}_opt2`}>
                {item.options.opt2}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id={`question_${item.id}_opt3`}
                name={`question_${item.id}`}
                value={item.options.opt3}
                checked={selectedOption === item.options.opt3}
                onChange={handleOptionChange}
              />
              <label htmlFor={`question_${item.id}_opt3`}>
                {item.options.opt3}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id={`question_${item.id}_opt4`}
                name={`question_${item.id}`}
                value={item.options.opt4}
                checked={selectedOption === item.options.opt4}
                onChange={handleOptionChange}
              />
              <label htmlFor={`question_${item.id}_opt4`}>
                {item.options.opt4}
              </label>
            </li>
          </ul>
        </form>
      </div>
    );
  });

  const prevClickHandler = () => {
    if (contextState.currentQuestion[0].id !== 1) {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id - 1);
    } else {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id);
    }
  };
  const nextClickHandler = () => {
    if (contextState.currentQuestion[0].id !== allQuestions.length) {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id + 1);
    } else {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id);
    }
    contextState.addToAnsweredQuestion(
      contextState.currentQuestion[0].id,
      selectedOption
    );
    contextState.totalQuestionStatusChange(
      contextState.currentQuestion[0].id,
      "answered"
    );
    setSelectedOption(null);
  };
  const reviewHandler = () => {
    if (contextState.currentQuestion[0].id !== allQuestions.length) {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id + 1);
    } else {
      contextState.addToCurrentQuestion(contextState.currentQuestion[0].id);
    }

    contextState.totalQuestionStatusChange(
      contextState.currentQuestion[0].id,
      "skip"
    );
  };
  return (
    <Fragment>
      <div className={classes.question_box}>
        <hr />
        <div className={classes.question_box}>{singleQuestion}</div>
        <hr />
        <div className={classes.button_box}>
          <button onClick={prevClickHandler}>Prev</button>
          <button onClick={reviewHandler}>Mark for Review(Skip)</button>
          <button
            className={classes.next_btn}
            disabled={selectedOption === null ? true : false}
            onClick={nextClickHandler}
          >
            Save & Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default QuestionContent;
