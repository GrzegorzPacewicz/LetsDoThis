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
              onClick={() => dispatch({ type: "open_form" })}
            >
              +
            </button>
          )}
        </div>
      </header>

      <div className="h-14 mt-8">
        {isFormShown && (
          <Form
            onTaskSubmit={(task) => {
              dispatch({ type: "add", newTask: task });
            }}
          />
        )}
      </div>

      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleDone={() => dispatch({ type: "finish", id: task.id })}
            onDelete={() => dispatch({ type: "delete", id: task.id })}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
