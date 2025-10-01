import React from 'react'
import styles from "./TaskWidget.module.css"
import TaskList from 'features/taskList/ui/TaskList'

export default function TaskWidget() {

  return (
    <div className={styles.tasks}>
        <TaskList />
    </div>
  )
}