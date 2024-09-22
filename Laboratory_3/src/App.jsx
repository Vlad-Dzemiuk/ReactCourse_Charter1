import './App.css';
import PageTitle from './components/PageTitle';
import ToDoContainer from './components/ToDoContainer';

function App() {
  return (
    <div className="container">
      <PageTitle title="TODO App" />
      <ToDoContainer />
    </div>
  );
}

export default App;
