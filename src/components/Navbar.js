import React from "react";
import Search from "./Search";

const Navbar = ({ tasks, setTasksToDisplay }) => {
  return (
    <nav className="navbar">
      <h2>Juan Api</h2>
      <Search tasks={tasks} setTasksToDisplay={setTasksToDisplay} />
    </nav>
  );
};

export default Navbar;
