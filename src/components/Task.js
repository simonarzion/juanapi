import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { deleteTask, getTasks, updateTask } from "../api";

const Task = ({ task, setTasksToDisplay, setTasks }) => {
  const { id, title, body, date, completed } = task;
  const [taskToUpdate, setTaskToUpdate] = useState({
    id: null,
    title: "",
    body: "",
    completed: false,
  });
  const [changeModal, setChangeModal] = useState(false);

  const refreshData = async () => {
    const data = await getTasks();

    setTasks(data);
    setTasksToDisplay(data);
  };

  const handleInputUpdate = (e) => {
    setTaskToUpdate({ ...taskToUpdate, [e.target.name]: e.target.value });
  };

  const cancelUpdate = () => {
    setTaskToUpdate({ title: "", body: "", completed: false, id: null });
    setChangeModal(false);
  };

  const handleUpdate = async (id) => {
    await updateTask(id, taskToUpdate);
    await refreshData();

    setTaskToUpdate({ title: "", body: "", completed: false, id: null });
    setChangeModal(false);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refreshData();
  };

  const completeTask = async () => {
    await updateTask(id, { ...task, completed: !completed });
    await refreshData();
  };

  return (
    // <div className="task">
    //   <div className="task__header">
    //     <div className="task__complete-container" onClick={completeTask}>
    //       <div className="task__complete-inner">
    //         <div className="task__complete">
    //           {completed && (
    //             <button className="task__complete-btn">
    //               <FaCheck />
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     </div>

    //     {changeModal ? (
    //       <input
    //         className="change__modal-input"
    //         type="text"
    //         name="title"
    //         value={taskToUpdate.title}
    //         onChange={handleInputUpdate}
    //       />
    //     ) : (
    //       <div className="task__header-inner">
    //         <div className="task__title-container">
    //           <h3 className="task__title">{title}</h3>
    //         </div>

    //         <div className="task__actions-container">
    //           <button
    //             className="task__actions"
    //             onClick={() => handleDelete(id)}
    //           >
    //             <FaTrash />
    //           </button>
    //           <button
    //             className="task__actions"
    //             onClick={() => setChangeModal(!changeModal)}
    //           >
    //             <FaEdit />
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    //   <div className="task__body">
    //     <h5 className="task__date">{date}</h5>
    //     {changeModal ? (
    //       <input
    //         className="change__modal-input"
    //         type="text"
    //         name="body"
    //         value={taskToUpdate.body}
    //         onChange={handleInputUpdate}
    //       />
    //     ) : (
    //       <p className="task__text">{body}</p>
    //     )}
    //   </div>

    //   {changeModal && (
    //     <div className="task__footer">
    //       <button onClick={cancelUpdate}>Cancel</button>
    //       <button onClick={() => handleUpdate(id)}>Done</button>
    //     </div>
    //   )}
    // </div>

    <div className="task">
      {!changeModal ? (
        <>
          <div className="task__header">
            <div className="task__complete-container" onClick={completeTask}>
              <div className="task__complete-inner">
                <div className="task__complete">
                  {completed && (
                    <button className="task__complete-btn">
                      <FaCheck />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="task__header-inner">
              <div className="task__title-container">
                <h3 className="task__title">{title}</h3>
              </div>

              <div className="task__actions-container">
                <button
                  className="task__actions"
                  onClick={() => handleDelete(id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="task__actions"
                  onClick={() => setChangeModal(!changeModal)}
                >
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
          <div className="task__body">
            <h5 className="task__date">{date}</h5>
            <p className="task__text">{body}</p>
          </div>
        </>
      ) : (
        <div className="change__container">
          <div className="change__input-container">
            <input
              className="change__modal-input"
              type="text"
              name="title"
              value={taskToUpdate.title}
              onChange={handleInputUpdate}
            />
            <textarea
              className="change__modal-textarea"
              type="text"
              name="body"
              value={taskToUpdate.body}
              onChange={handleInputUpdate}
            />
          </div>
          <div className="change__btn-container">
            <button className="change__btn" onClick={cancelUpdate}>
              Cancel
            </button>
            <button
              className="change__btn done"
              onClick={() => handleUpdate(id)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
