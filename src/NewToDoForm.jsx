import { useState } from 'react';

export default function NewToDoForm({addTodo}) {
    const [newTodo, setNewTodo] = useState({ title:'', completed: false });

    function handleAddTodo(e) {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo({ title:'', completed: false });
    }

    return (
       <>
        <h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
            <input 
                value={newTodo.title} 
                name="title"
                onChange={(e) => setNewTodo({ ...newTodo, [e.target.name]: e.target.value })}
                placeholder="New To-Do"
                // Specifies whether a form field needs to be filled in before the form can be submitted
                required
                // Regex. built-in HTML5 validation, the form cannot be submitted unless at least 4 characters are entered
                pattern='.{4,}'
                />
            <button type='submit'>ADD TO-DO</button>
        </form>
       </> 
    )
}
// e.target.value: event handler func access the input's internal value via this
// required & pattern (Regex) in <input> is for form validation