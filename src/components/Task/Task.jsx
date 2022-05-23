import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({value, deleteTodo}) => {
  let [check, handleCheck] = React.useState(false);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onClick={handleCheck(check=true)} style={(check)? {textDecoration: "strikethrough"} : {textDecoration: "none"}}/>
      <div data-cy="task-text"> {value} </div>
      <Counter />
      <button data-cy="task-remove-button" onClick={() => deleteTodo(value)}> X </button>
    </li>
  );
};

export default Task;
