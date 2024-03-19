import React, { useContext } from "react";
import classes from "./Result.module.css";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import QuestionContext from "../../Store/Questions_context";
import { useNavigate } from "react-router";

function Result() {
  const navigate = useNavigate();
  const ctxState = useContext(QuestionContext);

  const ansTable = ctxState.totalQuestion.map((item, index) => {
    const enteredAns =
      item.answer === ""
        ? "Not Answered"
        : `${item.answer.optionNumber} ${item.answer.enteredAnswer}`;

    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{item.question}</td>
        <td>{item.status}</td>
        <td>{enteredAns}</td>
      </tr>
    );
  });
  const reExamHandler = () => {
    alert("Are you sure you want to appear for exam?");
    window.location.href = "/";

    navigate("/", { replace: false });
  };
  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>Result</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL NO</th>
            <th>QUESTIONS</th>
            <th>STATUS</th>
            <th>ENTERED ANSWERED</th>
          </tr>
        </thead>
        <tbody>{ansTable}</tbody>
      </Table>
      <div className={classes.btn_container}>
        <Button variant="success">Download The Result</Button>
        <Button variant="warning" onClick={reExamHandler}>
          Take Exam Again
        </Button>
      </div>
    </Container>
  );
}

export default Result;
