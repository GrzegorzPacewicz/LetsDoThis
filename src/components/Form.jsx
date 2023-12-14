import React from 'react';

export function Form() {
    return (
        <form className="flex gap-3 mt-6" >
            <input type="text" className="w-full border-[1px] border-blue-400 rounded p-2 border-solid"/>
            <button className="border-[1px] rounded border-blue-400 w-max text-l px-2">Dodaj</button>
        </form>
    );
}
