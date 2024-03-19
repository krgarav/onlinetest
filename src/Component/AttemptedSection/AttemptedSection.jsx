import React, { useState } from "react";
import classes from "./AttemptedSection.module.css";
import { Col, Row, Container } from "react-bootstrap";
import QuestionContext from "../../Store/Questions_context";
import { useContext } from "react";
import { FaSquare } from "react-icons/fa6";
function AttemptedSection() {
  const contextState = useContext(QuestionContext);
  const handleClick = (index) => {
    contextState.addToCurrentQuestion(index);
    contextState.totalQuestionStatusChange("visited");
  };

  const iconpack = contextState.totalQuestion.map((item,index) => {
    let activeClass = "";
    let activeFontClass = "";
    let activeContainer = classes.iconContainer;
    if (contextState.currentQuestion.length > 0) {
      if (contextState.currentQuestion[0].id === item.id) {
        activeContainer = classes.outline;
      } else {
        activeContainer = classes.iconContainer;
      }
    }

    if (item.status === "not visited") {
      activeClass = classes.notAnswered;
      activeFontClass = classes.id;
    } else if (item.status === "answered") {
      activeClass = classes.answered;
      activeFontClass = classes.id;
    } else {
      activeClass = classes.skip;
      activeFontClass = classes.skip_id;
    }

    return (
      <Col
        key={item.id}
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <div className={classes.iconContainer}>
          <FaSquare className={`${activeClass} ${activeContainer}`} />
          <span className={activeFontClass}>{index+1}</span>
        </div>
      </Col>
    );
  });
  return (
    <div className={classes.attempted_container}>
      <section className={classes.first_box}>
        <div>
          <FaSquare className={classes.skip} />
          <span>Skip</span>
        </div>
        <div>
          <FaSquare className={classes.notAnswered} />
          <span>Not Answered</span>
        </div>
        <div>
          <FaSquare className={classes.answered} />
          <span>Answered</span>
        </div>
      </section>
      <hr />
      <section>
        <h4>Paper 1</h4>
      </section>
      <hr />
      <section className={classes.question_container}>
        <h5>Choose a Question</h5>
        <Container
          style={{ display: "flex", overflow: "hidden", maxHeight: "80%" }}
        >
          <Row xl={4}>{iconpack}</Row>
        </Container>
      </section>
    </div>
  );
}

export default AttemptedSection;
