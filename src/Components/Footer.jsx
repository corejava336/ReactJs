import styles from "./footer.module.css";

export default function Footer({ completedItems,totalTodos }) {
    return (
        <div className={styles.completedItems}> {/* Use the correct class name */}
         <span className={styles.items}> Completed Items: {completedItems}</span>  
         <span className={styles.total}> Total Items: {totalTodos}</span>  
        </div>
    );
}
