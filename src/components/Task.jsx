import React from "react";
import { Button } from "./Button.jsx";

export function Task({ task, onToggleDone, onDelete }) {
    return (
        <div className="flex justify-between gap-4 mt-6 items-center">
            <div className={`font-medium text-l ${task.done ? "line-through" : ""}`}>
                {task.task}
            </div>

            <div className="flex gap-2">
                {!task.done && (
                    <Button
                        onClick={() => {
                            onToggleDone(task.id);
                        }}
                        textButton={"Zrobione"}
                    />
                )}

                <button
                    className="border-[1px] rounded border-orange-500 w-max px-3 py-1 text-orange-500 font-medium hover:text-white hover:bg-orange-500 transition-all duration-300 "
                    onClick={() => {
                        onDelete(task.id);
                    }}
                >Usuń zadanie
                </button>
            </div>
        </div>
    );
}
