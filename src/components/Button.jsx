import React from 'react';

export function Button( {textButton}) {
    return (
        <button className="border-[1px] rounded border-current border-blue-400 w-max px-3 py-1 text-blue-500 font-medium">{textButton}</button>
    );
}
