import React, { useState } from "react";
import { Button } from "./Button.jsx";

export function Form({ onTaskSubmit }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedTask = inputValue.trim();

        if (!trimmedTask) {
            return;
        }

        onTaskSubmit(trimmedTask);

        setInputValue("");
    }

    return (
        <form className="flex gap-3" onSubmit={handleSubmit}>
            <input
                type="text"
                className="w-full border-[1px] border-blue-400 rounded p-2 border-solid"
                name="task"
                id="task"
                autoFocus
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />
            <Button textButton={"Dodaj"} type="submit"/>
        </form>
    );
}
