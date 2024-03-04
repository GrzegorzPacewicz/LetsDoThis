import { Form } from "./components/Form.jsx";
import React, { useReducer, useState } from "react";
import { getTasksNumber } from "./utils/getTasksNumber.js";
import { Task } from "./components/Task.jsx";
import { appReducer } from "./reducer/appReducer.js";

function App() {
  const [{ tasks, isFormShown }, dispatch] = useReducer(appReducer, {
    tasks: [
      { task: "Zapłacić rachunki", done: false, id: 1 },
      { task: "Wyrzucić śmieci", done: true, id: 2 },
    ],
    isFormShown: false,
  });

  const handleTaskSubmit = (newTask) => {
    dispatch({ type: "add", newTask });
  };

  function handleShowForm() {
    dispatch({ type: "open_form" });
  }

  const handleToggleDone = (id) => {
    dispatch({ type: "finish", id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  const tasksElements = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      onToggleDone={handleToggleDone}
      onDelete={handleDeleteTask}
    />
  ));

  return (
    <div className="bg-white py-8 px-6 rounded-3xl w-[600px]  mt-8 mx-2">
      <header className="flex items-center justify-between gap-40 ">
        <div className="">
          <h1 className="font-bold text-4xl">Do zrobienia</h1>
          <h2 className="font-bold text-3xl py-2">{getTasksNumber(tasks)}</h2>
        </div>

        <div className="w-32 flex justify-end">
          {!isFormShown && (
            <button
              className="bg-blue-400 border-0 rounded-full w-12 h-12 text-3xl text-white cursor-pointer transition-all duration-300 hover:bg-blue-700"
              onClick={handleShowForm}
            >
              +
            </button>
          )}
        </div>
      </header>

      <div className="h-14 mt-8">
        {isFormShown && <Form onTaskSubmit={handleTaskSubmit} />}
      </div>

      <div>{tasksElements}</div>
    </div>
  );
}

export default App;
