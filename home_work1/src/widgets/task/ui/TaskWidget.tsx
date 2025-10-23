import React from 'react'
import TaskList from 'features/taskList/ui/TaskList';
import styles from "./TaskWidget.module.css"

export default function TaskWidget() {

  return (
    <div className={styles.container}>
        <TaskList />
    </div>
  )
}