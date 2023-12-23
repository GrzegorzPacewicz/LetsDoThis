import React from "react";

export function Button({ textButton, onClick }) {
    return (
        <button
            className="border-[1px] rounded border-blue-400 w-max px-3 py-1 text-blue-500 font-medium hover:text-white hover:bg-blue-700 transition-all duration-300 "
            onClick={onClick}
        >
            {textButton}
        </button>
    );
}
