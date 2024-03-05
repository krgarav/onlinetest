import React from "react";
import classes from "./AttemptedSection.module.css";
import allQuestions from "../Allquestion/Allquestion";
import { Col, Row, Container } from "react-bootstrap";
import QuestionContext from "../../Store/Questions_context";
import { useContext } from "react";
import { FaSquare } from "react-icons/fa6";
import { useState } from "react";
function AttemptedSection() {
  const contextState = useContext(QuestionContext);
  const [attempted, setAttempted] = useState([]);
  const handleClick = (id) => {
    setAttempted((prev) => {
      return [...prev, id];
    });
    contextState.addToCurrentQuestion(id);
  };

  const iconpack = allQuestions.map((item) => {
    const activeClass = attempted.includes(item.id)
      ? classes.answered
      : classes.notAnswered;
    return (
      <Col
        key={item.id}
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <div className={classes.iconContainer}>
          <FaSquare className={activeClass} />
          <span className={classes.id}>{item.id}</span>
        </div>
      </Col>
    );
  });
  return (
    <div className={classes.attempted_container}>
      <section>
        <FaSquare className={classes.skip} />
        <span>Skip</span>
        <FaSquare className={classes.notAnswered} />
        <span>Not Visited</span>
        <FaSquare className={classes.answered} />
        <span>Answered</span>
      </section>
      <hr />
      <section>
        <h4>Paper 1</h4>
      </section>
      <hr />
      <section className={classes.question_container}>
        <h5>Choose a Question</h5>
        <Container style={{ display: "flex" }}>
          <Row xl={4}>{iconpack}</Row>
        </Container>
      </section>
    </div>
  );
}

export default AttemptedSection;
