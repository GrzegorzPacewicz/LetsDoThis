import { Form } from "./components/Form.jsx";
import { useState } from "react";
import { Tasks } from "./components/Tasks.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormShown, setIsFormShown] = useState(false);

  const handleTaskSubmit = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { task, id: prevTasks.length + 1 }];
    });
    setIsFormShown(false);
  };

  function handleShowForm() {
    setIsFormShown(true);
  }

  return (
    <div className="bg-white py-8 px-6 rounded-3xl max-w-3xl mt-8 mx-2 w-full">
      <header className="flex items-center justify-between gap-40 ">
        <div className="">
          <h1 className="font-bold text-4xl">Do zrobienia</h1>
          <h2 className="font-bold text-3xl py-2">5 zadań</h2>
        </div>

        <button
          className="bg-blue-400 border-0 rounded-full w-12 h-12 text-3xl text-white cursor-pointer"
          onClick={handleShowForm}
        >
          +
        </button>
      </header>

      <div className="h-14 mt-8">
        {isFormShown && <Form onTaskSubmit={handleTaskSubmit} />}
      </div>

      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
