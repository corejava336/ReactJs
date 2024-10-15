import { useState } from "react";
import styles from './Form.module.css';
export default function Forms({ todos, setTodos }) {
    const [todo, setTodo] = useState({name:"",done:false});

    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission behavior
        setTodos([...todos, todo]); // Update the todos state
        setTodo({name:"",done:false}); // Clear the input field
    }

    return (
        <div>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                     <input className={styles.modernInput}
                    onChange={(e) => setTodo({name:e.target.value,done:false})}
                    value={todo.name}
                    type="text"
                    placeholder="Enter the list item"
                     />
                    <button className={styles.modernButton} type="submit">Add</button>
                </div>
    
            </form>
        </div>
    );
}
