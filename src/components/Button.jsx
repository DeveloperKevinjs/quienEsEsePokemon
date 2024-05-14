import React from "react";

export const Button = ({ children, clickVerify, valueButton, resp }) => {
    const handleClick = () => {
        clickVerify(valueButton);
    };
    return (
        <button
            disabled={resp}
            onClick={handleClick}
            className={`duration-100 md:rotate-6 translate-y-2.5 hover:translate-y-0 hover:rotate-0 border-black border-2 overflow-hidden bg-blue-500 text-dark shadow-3xl  py-2 px-4 rounded-lg  hover:bg-opacity-60  w-64 h-20 md:w-48 md:h-64 flex justify-center items-center`}
        >
            {children}
        </button>
    );
};
