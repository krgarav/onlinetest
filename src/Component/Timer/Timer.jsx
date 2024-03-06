import React, { useState, useEffect } from "react";
import classes from "./Timer.module.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);


  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className={classes.timer_container}>
      <h1>
        {` Time Left : ${minutes
          .toString()
          .padStart(2, "0")} : ${remainingSeconds.toString().padStart(2, "0")}`}
      </h1>
      
    </div>
  );
};

export default Timer;
