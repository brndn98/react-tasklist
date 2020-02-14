import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const getTasks = () => {
    const localData = localStorage.getItem("react-tasks");
    return localData ? JSON.parse(localData) : [];
  };

  const [tasks, setTasks] = useState(getTasks);

  const addTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("react-tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
