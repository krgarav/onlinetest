import React from "react";
import classes from "./Login.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router";
function Login() {
  const rollRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredRollNumber = rollRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredRollNumber, enteredPassword);
    navigate("/instruction", { replace: true });
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.login_box}>
        <section className={classes.head_box}>
          <h1>Candidate Login</h1>
        </section>

        <div className={classes.form_box}>
          <form className={classes.form_data} onSubmit={submitHandler}>
            <br />
            <label>
              Roll number(As per admission certificate)
              <span className={classes.asterisk}>*</span>
            </label>
            <input
              type="number"
              placeholder="Enter roll number"
              ref={rollRef}
              required
            />
            <br />

            <label>
              Password(As per admission certificate)
              <span className={classes.asterisk}>*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
              required
            />
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
