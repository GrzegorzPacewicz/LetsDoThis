import React from "react";

export function Button({ textButton, onClick, disabled }) {
    return (
        <button
            className={`border-[1px] rounded w-max px-3 py-1 font-medium transition-all duration-300
                ${disabled ? "border-[1px] border-black bg-gray-300 text-gray-500 cursor-not-allowed" : "border-blue-400 text-blue-500 hover:text-white hover:bg-blue-700"}`}

            onClick={onClick}
            disabled={disabled}
        >
            {textButton}
        </button>
    );
}
