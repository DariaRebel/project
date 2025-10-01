import { useState, useCallback, useMemo } from "react";
import { Task } from 'entities/task/model/types';
import { v1 } from "uuid";

export type Filter = 'all' | 'completed' | 'incomplete';


const initialTasks: Task[] = [
  { id: v1(), title: "read a book", completed: true },
  { id: v1(), title: "clean room", completed: false },
  { id: v1(), title: "play football", completed: true },
  { id: v1(), title: "help my friend", completed: false },
  { id: v1(), title: "cook dinner", completed: false },
];

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filter, setFilter] = useState<Filter>("all");
    const [newTask, setNewTask] = useState("");

    const NewTask =(value: string) => setNewTask(value);

    const deleteTask = useCallback ((id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    const addTask = (title: string) => {
        const newTask ={ id: v1(), title: title, completed: false};
        setTasks([newTask, ...tasks]);

    }
    const changeStatus = (taskId: string, isCompleted: boolean) => {
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

    const filtredTask= useMemo ( () => {
        if (filter === "completed") {
            return tasks.filter(task => task.completed === true)
        }
        if (filter === "incomplete") {
             return tasks.filter(task => task.completed === false)
        }
        else return tasks;
    }, [tasks, filter])

    return {
        tasks: filtredTask,
        count: tasks.length,
        deleteTask,
        changeStatus,
        changeFilter,
        addTask,
        newTask,
        NewTask

    };
    }