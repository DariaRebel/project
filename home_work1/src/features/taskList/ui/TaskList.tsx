import { TaskCard } from "entities/task/ui/TaskCard";
//import { Task } from "entities/task/model/types";
//import { Filter } from "features/taskList/model/useTasks"
import { useTasks } from 'features/taskList/model/useTasks';
import styles from "./TaskList.module.css";



export default function TaskList() {

    const { tasks, count, deleteTask, changeStatus, changeFilter } = useTasks();

  return (
    <div>
        <div className={styles.tasks}>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} action={deleteTask} checked={changeStatus}/>
            ))}
        </div>
        <div className={styles.block}>
            <button className={styles.btn} onClick={ () => changeFilter("all")}>all</button> 
            <button className={styles.btn} onClick={ () => changeFilter("completed")}>completed</button>
            <button className={styles.btn} onClick={ () => changeFilter("incomplete")}>incompleted</button>
        </div>
        <p>Total tasks: {count}</p>
    </div>
  );
}