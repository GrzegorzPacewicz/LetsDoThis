import React, { useState } from "react";
import { Button } from "./Button.jsx";

export function Task({ task }) {
  const [taskDone, setTaskDone] = useState(false);

  return (
    <div className="flex justify-between gap-4 mt-6 items-center">
      <div className={`font-medium text-l ${taskDone ? "line-through" : ""}`}>
        {task}
      </div>
      <div className="flex gap-2">
        {!taskDone && (
          <Button
            onClick={() => {
              setTaskDone((prevTaskDone) => !prevTaskDone);
            }}
            textButton={"Zrobione"}
          />
        )}
        <Button textButton={"Usuń zadanie"} />
      </div>
    </div>
  );
}
