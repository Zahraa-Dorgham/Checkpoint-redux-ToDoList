import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToDo from './Components/AddToDo';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <main className="todo-app">
        <Header />
        <AddToDo />
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
