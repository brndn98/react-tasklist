import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitTask = e => {
    e.preventDefault();
    addTask(title, description);
    e.target.firstChild.focus();
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        placeholder="title..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="description..."
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default TaskForm;
