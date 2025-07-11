import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, name: "Study", completed: true, isEditing: false },
    { id: 1, name: "Sleep", completed: false, isEditing: false },
    { id: 2, name: "Game", completed: false, isEditing: false },
  ]);
  const [nextId, setNextId] = useState(3);
  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newTodo = { id: nextId, name: inputText, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
    setInputText("");
  };

  let filteredTask;
  if (filter === "Completed") {
    filteredTask = todos.filter((todo) => todo.completed === true);
  } else if (filter === "Active") {
    filteredTask = todos.filter((todo) => todo.completed !== true);
  } else {
    filteredTask = todos;
  }

  const toggleComplete = (id) => {
    const completeTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(completeTask);
  };

  const toggleEditTask = (id) => {
    const editedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      } else {
        return todo;
      }
    });
    setTodos(editedTask);
  };

  const saveEditTask = (id, newName) => {
    const newEditedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newName, isEditing: false };
      } else {
        return todo;
      }
    });
    setTodos(newEditedTodo);
  };

  const cancelEditTask = (id) => {
    const cancelEdit = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: false };
      } else {
        return todo;
      }
    });
    setTodos(cancelEdit);
  };

  const deleteTask = (id) => {
    const deletedTask = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTask);
  };

  const tasks = filteredTask.map((todo) => (
    <TaskList
      key={todo.id}
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      toggleComplete={toggleComplete}
      isEditing={todo.isEditing}
      toggleEditTask={toggleEditTask}
      saveEditTask={saveEditTask}
      cancelEditTask={cancelEditTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      <TodoForm value={inputText} onChange={handleChange} onSubmit={handleSubmit} />

      <FilterButtons setFilter={setFilter} />
      <ul>{tasks}</ul>
    </div>
  );
}
