import { TaskCard } from "entities/task";
import { useTasks } from "features/taskList";
import styles from "./TaskList.module.css";

// type PropsType = {
//     changeFilter: (value: Filter) => void;
//     addTask: (title: string) => void;
// }

export default function TaskList() {

    const { tasks, count, deleteTask, changeStatus, changeFilter, addTask, newTask, NewTask } = useTasks();

  return (
    <div>
        <input className={styles.input} placeholder="write a new task" value={newTask} onChange={ (e) => {NewTask(e.currentTarget.value)}} />
        <button className={styles.button} onClick={ () => {
                addTask(newTask);
                NewTask("");
            }
        }>
            Add
        </button>
        <div className={styles.tasks}>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} action={deleteTask} checked={changeStatus}/>
            ))}
        </div>
        <div className={styles.block}>
            <button className={styles.btn} onClick={ () => changeFilter("all")}>all</button> 
            <button className={styles.btn} onClick={ () => changeFilter("completed")}>completed</button>
            <button className={styles.btn} onClick={ () => changeFilter("incomplete")}>active</button>
        </div>
        <p>Total tasks: {count}</p>
    </div>
  );
}