import React, { Fragment, useEffect, useState } from "react";
import classes from "./Question.module.css";
import QuestionContent from "../../Component/QuestionContent/QuestionContent";
import Timer from "../../Component/Timer/Timer";
import { useNavigate } from "react-router";
import Userinfo from "../../Component/Userinfo/Userinfo";
import AttemptedSection from "../../Component/AttemptedSection/AttemptedSection";
function Question() {
  const navigate = useNavigate();

  const submitHanldler = () => {
    alert("Are you sure you want to submit the exam?");
    navigate("/", { replace: true });
  };
  return (
    <Fragment>
      <div className={classes.question_container}>
        <div className={classes.first_box}>
          <section className={classes.timer_container}>
            <Timer />
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
          <section className={classes.submit_box}>
            <button onClick={submitHanldler}>Submit</button>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Question;
