import { useState } from "react";
import Forms from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";
export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const completedItems=todos.filter((todo)=>todo.done).length;
    const totalTodos=todos.length;
    return (
        <div>
            <Forms todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
             <Footer completedItems={completedItems} totalTodos={totalTodos}/> 
        </div>
    );
}
