import { useState } from "react";

const ToDoItem = ({ todo, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [error, setError] = useState("");

  function handleEdit() {
    setIsEdit(!isEdit);
    setError("");
  }

  function handleSave() {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onEdit(todo.id, title);
    setIsEdit(false);
    setError("");
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <li>
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Enter title"
            style={{ borderColor: error ? "red" : "initial" }}
          />
          <button onClick={handleSave}>Save</button>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>Remove</button>
    </li>
  );
};

export default ToDoItem;
