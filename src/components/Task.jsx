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

        <Button
          onClick={() => {
            onDelete(task.id);
          }}
          textButton={"Usuń zadanie"}
        />
      </div>
    </div>
  );
}
