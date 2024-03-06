import React, { Fragment, useContext, useEffect, useState } from "react";
import classes from "./Question.module.css";
import QuestionContent from "../../Component/QuestionContent/QuestionContent";
import Timer from "../../Component/Timer/Timer";
import { useNavigate } from "react-router";
import Userinfo from "../../Component/Userinfo/Userinfo";
import AttemptedSection from "../../Component/AttemptedSection/AttemptedSection";
import QuestionContext from "../../Store/Questions_context";
function Question() {
  const contextStore = useContext(QuestionContext);
  const navigate = useNavigate();
  const submitHanldler = () => {
    alert("Are you sure you want to submit the exam?");
    console.log(contextStore.answeredQuestion);
    navigate("/", { replace: true });
  };
  return (
    <Fragment>
      <div className={classes.question_container}>
        <div className={classes.first_box}>
          <section className={classes.timer_container}>
            <Timer />
            <section className={classes.submit_box}>
              <button onClick={submitHanldler}>Submit</button>
            </section>
          </section>

          <section>
            <QuestionContent questionId={1} />
          </section>
        </div>
        <div className={classes.second_box}>
          <section className={classes.userdetail_box}>
            <Userinfo />
          </section>
          <section className={classes.attempted_box}>
            <AttemptedSection />
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Question;
