import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import classes from "./Userinfo.module.css";
function Userinfo() {
  return (
    <div className={classes.user_container}>
      <section className={classes.person_icon}>
        <IoPersonOutline className={classes.icon} />
      </section>
      <section className={classes.person_info}>
        <h2>John Snow</h2>
      </section>
    </div>
  );
}

export default Userinfo;
