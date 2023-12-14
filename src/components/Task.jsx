import React from 'react';
import { Button } from "./Button.jsx";

export function Task() {
    return (
        <div className="flex justify-between gap-4">
            <div>Zadanie do zrobienia</div>
            <div className="color-orange-400 flex gap-2">
                <Button className="border-orange-400" textButton={"Zrobione"}/>
                <Button className="border-orange-400" textButton={"Usuń zadanie"}/>

            </div>

        </div>
    );
}
