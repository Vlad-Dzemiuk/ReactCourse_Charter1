import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import ToDoTable from './components/ToDoTable';
import AddToDoForm from './components/AddToDoForm';
import PageTitle from './components/PageTitle';

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

  return (
    <div className="container">
      <PageTitle title="TODO App" />
      <SearchInput searchValue={search} setSearch={setSearch} />
      <AddToDoForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
      <ToDoTable toDoList={toDoList} onDelete={handleDelete} search={search} />
    </div>
  );
}

export default App;
