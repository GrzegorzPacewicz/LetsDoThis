import { Form } from "./components/Form.jsx";
import { Task } from "./components/Task.jsx";
import { useState } from "react";

function App() {

    const [tasks, setTasks] = useState([])

    const handleTaskSubmit = (task) =>  {
        setTasks((prevTasks) => {
            return [
                ...prevTasks,  { task, id: prevTasks.length + 1 },

            ]
        });
    }

    return (
        <div className="bg-white py-8 px-6 rounded-3xl max-w-3xl mt-8 mx-2 w-full">

            <header className="flex items-center justify-between gap-40 ">

                <div className="">
                    <h1 className="font-bold text-4xl">Do zrobienia</h1>
                    <h2 className="font-bold text-3xl py-2">5 zadań</h2>
                </div>

                <button className="bg-blue-400 border-0 rounded-full w-12 h-12 text-3xl text-white cursor-pointer">+</button>

            </header>

            <Form onTaskSubmit={handleTaskSubmit} />
            <Task />

        </div>
    )
}

export default App
