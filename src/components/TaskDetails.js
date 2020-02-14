import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskDetails = ({ task }) => {
  const { removeTask } = useContext(TaskContext);
  return (
    <li className="task-item">
      <div onClick={() => removeTask(task.id)}>+</div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </li>
  );
};

export default TaskDetails;
