import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <nav className="navbar">
      <h1>TASK LIST WITH REACT</h1>
      <p>
        <span>{tasks.length}</span> tasks to do
      </p>
    </nav>
  );
};

export default Navbar;
