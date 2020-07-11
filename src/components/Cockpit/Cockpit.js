import React from "react";
import styles from "./Cockpit.module.css";

function Cockpit(props) {
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  let btnClasses = [styles.button];
  if (props.showPersons) {
    btnClasses.push(styles.red);
  }

  return (
    <div>
      <h1>Welcome to the App</h1>
      <p className={classes.join(" ")}> e dey work</p>
      <button className={btnClasses.join(" ")} onClick={props.change}>
        Toggle Persons
      </button>
    </div>
  );
}

export default Cockpit;
