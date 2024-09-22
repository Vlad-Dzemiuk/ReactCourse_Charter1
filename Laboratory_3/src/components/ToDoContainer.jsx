import { useState } from 'react';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import AddToDoForm from './AddToDoForm';

const ToDoContainer = () => {
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
          id: Date.now(),
          title: title,
        },
      ];
    });

    setTitle('');
  };

  const handleDelete = (id) => {
    setToDoList((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div>
      <SearchInput searchValue={search} setSearch={setSearch} />
      <AddToDoForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
      <ToDoTable toDoList={toDoList} onDelete={handleDelete} search={search} />
    </div>
  );
};

export default ToDoContainer;
