import React, { useEffect, useState } from "react";
import { addTask, getTasks } from "./api";
import Tasks from "./components/Tasks";
import { FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksToDisplay, setTasksToDisplay] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
  });

  const fetchData = async () => {
    const data = await getTasks();

    setTasks(data);
    setTasksToDisplay(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(newTask);
    await fetchData();
    setNewTask({ title: "", body: "" });
    setAddModal(false);
  };

  return (
    <div>
      <Navbar tasks={tasks} setTasksToDisplay={setTasksToDisplay} />

      <button className="add__btn" onClick={() => setAddModal(!addModal)}>
        <FaPlus />
      </button>

      {addModal && (
        <>
          <form className="add__modal" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={newTask.title}
              name="title"
              type="text"
              placeholder="Title"
              className="add__input"
            />
            <textarea
              onChange={handleChange}
              value={newTask.body}
              name="body"
              type="text"
              placeholder="Body"
              className="add__textarea"
            />
            <button className="add__task-submit">Add Task</button>
            <button
              className="close__modal"
              type="button"
              onClick={() => setAddModal(false)}
            >
              <FaTimes />
            </button>
          </form>
        </>
      )}

      <Tasks
        setTasks={setTasks}
        setTasksToDisplay={setTasksToDisplay}
        tasks={tasks}
        tasksToDisplay={tasksToDisplay}
      />
    </div>
  );
};

export default App;
