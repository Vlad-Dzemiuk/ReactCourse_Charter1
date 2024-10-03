import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, onDelete, onEdit, search }) => {
  const filteredList = toDoList.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="todo-list">
      {filteredList.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
