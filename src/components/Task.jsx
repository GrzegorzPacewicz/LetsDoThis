import React from 'react';
import { Button } from "./Button.jsx";

export function Task({id, task}) {
    return (
        <div className="flex justify-between gap-4 mt-6 items-center">
            <div className="font-medium text-l">{task}</div>
            <div className="flex gap-2">
                <Button textButton={"Zrobione"}/>
                <Button textButton={"Usuń zadanie"}/>

            </div>

        </div>
    );
}
