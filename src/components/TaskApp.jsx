import React from "react";
import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task/Task";

const TaskApp = () => {
  const [todos, setTodos] = React.useState([]);
  
  const addTodo = (abc) => {
    setTodos([...todos, {
      id: uuidv4(),
      value: abc
    }])
  }

  const deleteTodo = (value) => {
    setTodos(todos.map((ele) => ele.value != value ));
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask addTodo={addTodo}/>
      <Tasks> 
        {todos.map((ele) => (
          <Task key={ele.id} value={ele.value} deleteTodo={deleteTodo} />
        ))}
      </Tasks>
    </div>
  );
};

export default TaskApp;
