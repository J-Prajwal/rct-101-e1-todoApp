import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTodo}) => {
  const [value, setValue] = React.useState("");
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} placeholder="Add Task" onChange={(e) => {
        setValue(e.target.value);
      }}/>
      <button data-cy="add-task-button" disabled={!value} onClick={() => {
        console.log(value);
        addTodo(value);
        setValue("");
      }} >+</button>
    </div>
  );
};

export default AddTask;
