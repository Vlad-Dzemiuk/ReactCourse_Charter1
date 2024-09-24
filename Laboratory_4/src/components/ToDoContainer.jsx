import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ToDoTable from "./ToDoTable";
import AddToDoForm from "./AddToDoForm";
import useGetAllToDo from "../hooks/useGetAllToDo";

const ToDoContainer = () => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const { data, isLoading } = useGetAllToDo();

  useEffect(() => {
    if (data) {
      setToDoList(data);
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    setToDoList((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          title: title,
        },
      ];
    });

    setTitle("");
  };

  const handleDelete = (id) => {
    setToDoList((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div>
      <SearchInput searchValue={search} setSearch={setSearch} />
      <AddToDoForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ToDoTable
          toDoList={toDoList}
          onDelete={handleDelete}
          search={search}
        />
      )}
    </div>
  );
};

export default ToDoContainer;
