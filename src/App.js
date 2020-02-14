import React from "react";
import TaskContextProvider from "./contexts/TaskContext";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskForm />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
