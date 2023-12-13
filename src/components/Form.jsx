import React from 'react';

export function Form() {
    return (
        <form className="gap-2 flex" >
            <input type="text" className="border-[1px] px-2 border-black"/>
            <button className="border-[1px] border-black px-2">Dodaj</button>
        </form>
    );
}
