import React from 'react';
import { Button } from "./Button.jsx";

export function Form() {
    return (
        <form className="flex gap-3 mt-6" >
            <input type="text" className="w-full border-[1px] border-blue-400 rounded p-2 border-solid"/>
            <Button textButton={"Dodaj"} />
        </form>
    );
}
