import { useCallback, useEffect, useState } from "react";
import { Task } from 'entities/task/model/types';
import { useGetTasksQuery } from "entities/task/api/tasksApi";

export type Filter = 'all' | 'completed' | 'incomplete';

//function useTasks(initial: Task[]): {
   // tasks: Task[]; // отфильтрованные задачи
    //filter: Filter; // текущий фильтр 
    //setFilter: (f: Filter) => void; // смена фильтра 
  //  removeTask: (id: string) => void; // удаление задачи по ID
//}
//import { useState } from "react";
//import { User } from "entities/user/model/types";

// const initialTasks: Task[] = [
//   { id: '1', title: "read a book", completed: true },
//   { id: '2', title: "clean room", completed: false },
//   { id: '3', title: "play football", completed: true },
//   { id: '4', title: "help my friend", completed: false },
//   { id: '5', title: "cook dinner", completed: false },
// ];

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<Filter>("all");

    const { data: remoteTasks = [] } = useGetTasksQuery();

    useEffect(() => {
      if (remoteTasks.length > 0 && tasks.length === 0) {
        setTasks(remoteTasks);
   }
  }, [remoteTasks, tasks.length]);

    const removeTask = useCallback ((id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
 }, []);

    const changeStatus = (taskId: number, isCompleted: boolean) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = isCompleted;
    }
    setTasks([...tasks]);
  }

    const changeFilter = (value: Filter) => {
    console.log(value)
    setFilter(value);
  }

    let filtredTask = tasks;
    if (filter === "completed") {
        filtredTask = tasks.filter(task => task.completed === true)
    }
    if (filter === "incomplete") {
        filtredTask = tasks.filter(task => task.completed === false)
    }

  return {
    tasks: filtredTask,
    count: tasks.length,
    removeTask,
    changeStatus,
    changeFilter
  };
}