import { useState } from "react";
import SearchInput from "./SearchInput";
import ToDoTable from "./ToDoTable";
import AddToDoForm from "./AddToDoForm";
import useGetAllToDo from "../hooks/useGetAllToDo";

const ToDoContainer = () => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const { data, setData, isLoading } = useGetAllToDo();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    setData((prev) => {
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
    setData((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div>
      <SearchInput searchValue={search} setSearch={setSearch} />
      <AddToDoForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ToDoTable toDoList={data} onDelete={handleDelete} search={search} />
      )}
    </div>
  );
};

export default ToDoContainer;
