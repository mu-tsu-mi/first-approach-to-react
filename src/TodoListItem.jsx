import "./ToDoListItem.css";

function ToDoListItem({todo, rowIndex, changeTodoStatus}) {

    function changeStatus(e) {
        e.preventDefault();
        changeTodoStatus(rowIndex)
    }

    return (
        <li 
            className="ToDoListItem"
            style={{
                backgroundColor: rowIndex % 2 ? "darkgreen" : "lightgrey"
            }}
        >
        <div className="numbering">
            {rowIndex}
        </div>
        <span style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}>
            {todo.title}
        </span>
        <div 
            onClick={changeStatus}
            className="statusMark"
            style={{ color: todo.completed ? "red" : "green" }}
        >
            { todo.completed ? "⨉" : "✓" }
        </div>
        </li>
    )
}

export default ToDoListItem;

// The style prop is used when styling needs to be computed each time the component renders 
// and must be assigned a JS object with keys representing "the camelCased names" of CSS properties.