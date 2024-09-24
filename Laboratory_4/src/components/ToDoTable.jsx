const ToDoTable = ({ toDoList, onDelete, search }) => {
  const filteredList = toDoList.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDoList.length > 0 ? (
          filteredList.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <button onClick={() => onDelete(todo.id)}>Remove</button>
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
  );
};

export default ToDoTable;
