import { useState, useEffect } from "react";

export default function TaskList({
  id,
  name,
  completed,
  toggleComplete,
  cancelEditTask,
  saveEditTask,
  isEditing,
  toggleEditTask,
  deleteTask,
}) {
  let editingTask;
  const [editedTodo, setEditedTodo] = useState(name);

  const handleChangeTodo = (e) => {
    setEditedTodo(e.target.value);
  };

  useEffect(() => {
    setEditedTodo(name);
  }, [name]);

  if (isEditing === false) {
    editingTask = (
      <>
        <div className="task-name">
          <input type="checkbox" id={id} checked={completed} onChange={() => toggleComplete(id)} />
          <label className="task-label" htmlFor={id}>
            {name}
          </label>
        </div>

        <div className="btn-group">
          <button className="btn-edit" onClick={() => toggleEditTask(id)}>
            Edit <span className="visually-hidden">{name}</span>
          </button>
          <button className="btn-delete" onClick={() => deleteTask(id)}>
            Delete <span className="visually-hidden">{name}</span>
          </button>
        </div>
      </>
    );
  } else {
    editingTask = (
      <>
        <div className="task-edit">
          <input type="text" id={id} value={editedTodo} onChange={handleChangeTodo} />
        </div>

        <div className="btn-group">
          <button className="btn-cancel" onClick={() => cancelEditTask(id)}>
            Cancel <span className="visually-hidden">task</span>
          </button>
          <button className="btn-save" onClick={() => saveEditTask(id, editedTodo)}>
            Save <span className="visually-hidden">task</span>
          </button>
        </div>
      </>
    );
  }
  return <div className="task">{editingTask}</div>;
}
