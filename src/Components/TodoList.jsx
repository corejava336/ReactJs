import ToDoItems from "./ToDoItems.jsx";
import styles from "./todolist.module.css";

export default function TodoList({ todos,setTodos} ) {
    const sortedtodos=todos
    .slice()
    .sort((a,b)=>Number(a.done)-Number(b.done))
    return (
        <div className={styles.list}>
            {sortedtodos.map((item) => (
                <ToDoItems key={item.name} item={item}  todos={todos}  setTodos={setTodos} />
            ))}
        </div>
    );
}
