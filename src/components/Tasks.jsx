import React from "react";
import { Task } from "./Task.jsx";

export function Tasks({ tasks, setTasks }) {

    const handleToggleDone = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const tasksElements = tasks.map((task) => (
        <Task
            key={task.id}
            task={task}
            onToggleDone={handleToggleDone}
            onDelete={handleDeleteTask}
        />
    ));

    return <div>{tasksElements}</div>;
}
