import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./Instruction.module.css";
function Instruction() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const startTestHandler = () => {
    navigate("/questions", { replace: true });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <header className={classes.head_container}>
        <h1>Smart Eval Test</h1>
      </header>
      <article className={classes.instruction_container}>
        <h2>Instruction for Online Test</h2>
        <br />
        <h6>
          Please read the Instructions carefully before starting the test.{" "}
        </h6>
        <br />
        <ol>
          <li>
            Click <strong> Start Test</strong> on bottom of your screen to begin
            the test.
          </li>
          <li>
            The clock has been set at sever and count down timer at the top
            Right side of the screen will display left out time to closure from
            where you can monitor time you have to complete the exam.
          </li>
          <li>
            Click one of the answer. simply click the desired option button.
          </li>
          <li>
            Candidate can change their response of attempted answer anytime
            during examination slot time by clicking another answer which
            candidates want to change an answer. Click to remove incorrect
            answer. click the desired option button.
          </li>
          <li>
            Click on <strong> Save & Next </strong> to save the answer and
            moving to the next question. The next question will automatically be
            displayed.
          </li>
          <li>
            Click on <strong> Mark & Skip </strong> to review you answer at
            later stage.
          </li>
          <li>
            To select a question, click on the question number on the Right side
            of the screen.
          </li>
          <li>
            <span>
              The colour coded diagram on the Right side of the screen shows the
              status of the question.
            </span>
            <br/>
            <br/>
            
            <span>
              <table  style={{width:"40%"}} className={classes.table}>
                <tr>
                  <td  className={classes.red_box}>Red</td>
                  <td>Not Attempted</td>
                </tr>
                <tr>
                  <td className={classes.yellow_box}>Yellow</td>
                  <td>Mark & Skip</td>
                </tr>
                <tr>
                  <td className={classes.green_box}>Green</td>
                  <td>Answered</td>
                </tr>
              </table>
            </span>
          </li>
          <br/>
          <li>
            Candidate will be allowed to Shuffle between questions anytime
            during the examination as per their convenience.
          </li>

          <li>
            All the answered questions will be counted for calculating the final
            score.
          </li>

          <li>
            Do not click final <strong>SUBMIT</strong> on the top right corner
            of the screen unless you have completed the exam. In case you click
            final <strong>SUBMIT</strong> you will not be permitted to continue.
          </li>

          <li>Score obtained will be displayed immediately after the test. </li>
        </ol>
      </article>
      <hr />
      <section className={classes.content_box}>
        <div className={classes.select_box}>
          <div>
            <label> Choose your default language : </label>
            <select>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <small className={classes.note}>
            Please note all questions will appear in your default language.
            <br />
            This language can be changed for a particular question later on.
          </small>
        </div>
        <div className={classes.checkbox}>
          <div className={classes.inputbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label>
              The computer provided to me is in proper working condition. I have
              read and understood the instructions given above.{" "}
            </label>
          </div>
          <button
            disabled={!isChecked}
            className={!isChecked ? classes.disabled_btn : classes.enabled_btn}
            onClick={startTestHandler}
          >
            Start Test
          </button>
        </div>
      </section>
    </div>
  );
}

export default Instruction;
