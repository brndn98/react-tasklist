import React, { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaksDetails from "./TaskDetails";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const listEndRef = useRef(null);

  const scrollListToBottom = () => {
    listEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollListToBottom, [tasks]);

  return tasks.length ? (
    <ul className="task-list">
      {tasks.map(task => {
        return <TaksDetails key={task.id} task={task} />;
      })}
      <span ref={listEndRef} />
    </ul>
  ) : (
    <h4>The list is empty :D</h4>
  );
};

export default TaskList;
