import { TaskCard } from "entities/task";
import { useTasks } from 'features/taskList/model/useTasks';
import styles from "./TaskList.module.css";



export default function TaskList() {

    const { tasks, count, removeTask, changeStatus, changeFilter } = useTasks();

  return (
    <div>
        <div className={styles.tasks}>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} action={removeTask} checked={changeStatus}/>
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