import React from "react";
import { IoSquare } from "react-icons/io5";
import classes from "./AttemptedSection.module.css";
import allQuestions from "../Allquestion/Allquestion";
import { Col, Row, Container } from "react-bootstrap";

import { FaSquare } from "react-icons/fa6";
function AttemptedSection() {
  const iconpack = allQuestions.map((item) => {
    return (
      <Col key={item.id}>
        <div className={classes.iconContainer}>
          <FaSquare className={classes.notAnswered} />
          <span className={classes.id}>{item.id}</span>
        </div>
      </Col>
    );
  });
  return (
    <div className={classes.attempted_container}>
      <section>
      <FaSquare className={classes.answered} />
        <span>Answered</span>
        <FaSquare className={classes.notAnswered} />
        <span>Not Visited</span>
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
