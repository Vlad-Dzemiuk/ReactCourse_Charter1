import { useState } from "react";
import SearchInput from "./SearchInput";
import ToDoList from "./ToDoList";
import AddToDoForm from "./AddToDoForm";
import useGetAllToDo from "../hooks/useGetAllToDo";
import Loading from "./Loading";

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

  const handleEdit = (id, title) => {
    setData((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: title } : t))
    );
  };

  return (
    <div>
      <SearchInput searchValue={search} setSearch={setSearch} />
      <AddToDoForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
      <Loading isLoading={isLoading}>
        <ToDoList
          toDoList={data}
          onDelete={handleDelete}
          onEdit={handleEdit}
          search={search}
        />
      </Loading>
    </div>
  );
};

export default ToDoContainer;
