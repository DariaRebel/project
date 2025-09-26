import { useState } from "react";
import { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

//function useTasks(initial: Task[]): {
   // tasks: Task[]; // отфильтрованные задачи
    //filter: Filter; // текущий фильтр 
    //setFilter: (f: Filter) => void; // смена фильтра 
  //  removeTask: (id: string) => void; // удаление задачи по ID
//}
//import { useState } from "react";
//import { User } from "entities/user/model/types";

const initialTasks: Task[] = [
  { id: '1', title: "read a book", completed: true },
  { id: '2', title: "clean room", completed: false },
  { id: '3', title: "play football", completed: true },
  { id: '4', title: "help my friend", completed: false },
  { id: '5', title: "cook dinner", completed: false },
];

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filter, setFilter] = useState<Filter>("all");

  const deleteTask = (id: string) => {
    console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeStatus = (taskId: string, isCompleted: boolean) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = isCompleted;
    }
    setTasks([...tasks]);
  }

  //const filteredT = tasks.filter(task => task.completed === true)

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

  //const filteredUsers = (completed: boolean) => {

  //} users.filter(user =>
   // user.name.toLowerCase().includes(filter.toLowerCase())
  //);

  return {
    tasks: filtredTask,
    count: tasks.length,
    deleteTask,
    changeStatus,
    changeFilter
  };
}