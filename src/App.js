// import logo from './logo.svg';
import './App.css';
import ToDoList from './TodoList';
import NewToDoForm from './NewToDoForm';
import {useState} from 'react';

function App() {
  const [showTodos, setShowTodos] = useState(true)
  const [todos, setTodos] = useState([
    {title: "Have Fun", completed: true},
    {title: "Learn React", completed: false},
    {title: "Learn the MERN-Stack", completed: false}
  ]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function changeTodoStatus(rowIndexToToggle) {
    const newTodos = todos.map((todo, index) => { 
      if((index + 1) === rowIndexToToggle) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
        <h1>React To-Do</h1>
          <button onClick={()=> setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
            {showTodos && <ToDoList todos={todos} changeTodoStatus={changeTodoStatus} />}
          <hr></hr>
          <NewToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
