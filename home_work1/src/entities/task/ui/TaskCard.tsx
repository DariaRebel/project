import React from 'react'
import { Task } from '../model/types'
import styles from "./TaskCard.module.css";

type Props = {
    task: Task;
    action: (id: number) => void;
    checked:(taskId: number, isCompleted: boolean) => void;
  };
  
  export function TaskCard({ task, action, checked}: Props) {

    return (
      <div className={styles.card}>
        <input className={styles.check} type="checkbox" checked={task.completed} onChange={ (e) => checked(task.id, e.currentTarget.checked)} />
        <p>{task.todo}</p> 
        <button className={styles.button} onClick={() => action(task.id)}>
            x
        </button>
      </div>
    );
  }