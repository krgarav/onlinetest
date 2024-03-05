import React, { Fragment, useEffect, useState } from "react";
import allQuestions from "../Allquestion/Allquestion";
import classes from "./QuestionContent.module.css";
function QuestionContent(props) {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption((value)=>{
      console.log(e.target.value);
      return value=e.target.value;
    });
    // console.log(selectedOption);
  };
  useEffect(() => {
    const q1 = allQuestions.filter((item) => {
      return item.id === currentQuestionId;
    });
    // setSelectedOption("");
    setCurrentQuestion(q1);
  }, [currentQuestionId]);

  const singleQuestion = currentQuestion.map((item, index) => {
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

        {/* <form>
          <ul className={classes.option}>
            <li>
              <input type="radio" name={`question_${item.id}`} />
              <label>{item.options.opt1}</label>
            </li>
            <li>
              <input type="radio" name={`question_${item.id}`} />
              <label>{item.options.opt2}</label>
            </li>
            <li>
              <input type="radio" name={`question_${item.id}`} />
              <label>{item.options.opt3}</label>
            </li>
            <li>
              <input type="radio" name={`question_${item.id}`} />
              <label>{item.options.opt4}</label>
            </li>
          </ul>
        </form> */}
      </div>
    );
  });

  const prevClickHandler = () => {
    setCurrentQuestionId((prev) => {
      if (prev !== 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };
  const nextClickHandler = () => {
    setCurrentQuestionId((next) => {
      if (next !== allQuestions.length) {
        return next + 1;
      } else {
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
