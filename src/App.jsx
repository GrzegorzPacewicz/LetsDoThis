import { Form } from "./components/Form.jsx";
import { useState } from "react";
import { Tasks } from "./components/Tasks.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormShown, setIsFormShown] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);

  const handleTaskSubmit = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { id: prevTasks.length + 1, task, done: false }];
    });
    setIsFormShown(false);
    setIsButtonShown(true);
  };

  function handleShowForm() {
    setIsFormShown(true);
    setIsButtonShown(false);
  }

  return (
    <div className="bg-white py-8 px-6 rounded-3xl max-w-3xl mt-8 mx-2 w-full">
      <header className="flex items-center justify-between gap-40 ">
        <div className="">
          <h1 className="font-bold text-4xl">Do zrobienia</h1>
          <h2 className="font-bold text-3xl py-2">5 zadań</h2>
        </div>

        <div className="w-32 flex justify-end">
          {isButtonShown && (
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

      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
