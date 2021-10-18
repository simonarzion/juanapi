import React from "react";
import Task from "./Task";

const Tasks = ({ tasksToDisplay, setTasksToDisplay, tasks, setTasks }) => {
  return (
    <>
      {tasksToDisplay.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            tasksToDisplay={tasksToDisplay}
            setTasksToDisplay={setTasksToDisplay}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}

      {tasksToDisplay.length === 0 && <h3>No tasks to display.</h3>}
    </>
  );
};

export default Tasks;
