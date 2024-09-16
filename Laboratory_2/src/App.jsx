import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    setToDoList((prev) => {
      return [
        ...prev,
        {
          id: toDoList.length + 1,
          title: title,
        },
      ];
    });

    setTitle('');
  };

  const handleDelete = (id) => {
    setToDoList((prev) => prev.filter((x) => x.id !== id));
  };

  const filteredToDoList = toDoList.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
        />
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredToDoList.length > 0 ? (
            filteredToDoList.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <button onClick={() => handleDelete(todo.id)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
