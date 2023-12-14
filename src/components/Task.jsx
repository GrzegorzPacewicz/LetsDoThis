import React from 'react';
import { Button } from "./Button.jsx";

export function Task(props) {
    return (
        <div className="flex">
            <div>Zadanie do zrobienia</div>
            <div className="border-orange-400">
                <Button className="border-orange-400" textButton={"Zrobione"}/>
                <Button className="border-orange-400" textButton={"Usuń zadanie"}/>

            </div>

        </div>
    );
}
