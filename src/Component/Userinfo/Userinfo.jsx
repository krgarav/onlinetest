import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import classes from "./Userinfo.module.css";
function Userinfo() {
  return (
    <div className={classes.user_container}>
      <section className={classes.person_icon}>
        <IoPersonOutline className={classes.icon} />
        <br />
        <br />
        <h3>John Snow</h3>
      </section>
      <section className={classes.person_info}>
        <h5>Examination Center : New Delhi</h5>
        <br />
        <h5>Roll No: 1234455</h5>
      </section>
    </div>
  );
}

export default Userinfo;
