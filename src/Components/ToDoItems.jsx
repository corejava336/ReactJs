import styles from "./todoitem.module.css";

export default function ToDoItems({ item,todos,setTodos}) {
    function handleDelete({item}){
        console.log(item.name+" Deleted");
        setTodos(todos.filter((todo)=>todo!==item));
    }
    function handleclick(name){
        console.log(" clicked");
     const newArray=   todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo);
        setTodos(newArray);
        console.log(todos);

    }
    const strike=item.done? styles.completed:"";
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={strike} onClick={()=>handleclick(item.name)}>{item.name} </span>
                <span><button onClick={()=>handleDelete({item})} className={styles.deleteButton}>-</button></span>
            </div>
            <hr className={styles.line} />

        </div>
    );
}
