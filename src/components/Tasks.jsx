import React from 'react';
import { Task } from "./Task.jsx";

export function Tasks( {tasks}) {

    const tasksElement = tasks.map((r) => (
        <Task key={r.id} task={r.task}/>
    ));

    return (
        <div>{tasksElement}</div>
    );
}
