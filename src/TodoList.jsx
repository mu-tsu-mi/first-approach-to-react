import "./ToDoListFrame.css";
import ToDoListItem from './TodoListItem';

function ToDoList({ todos, changeTodoStatus }) {
    
    return (
        <ul className='ToDoListFrame'>
            {todos.map((t, idx) => <ToDoListItem todo={t} rowIndex={idx + 1} key={idx} changeTodoStatus={changeTodoStatus} /> )}
        </ul>
    )
}

export default ToDoList;
