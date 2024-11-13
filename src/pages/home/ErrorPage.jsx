import React from "react";

const ErrorPage = () => {
    return (
                <div className="flex items-center justify-center min-h-screen">
        <div className="absolute z-50 flex w-3/4 h-24 overflow-hidden bg-white shadow-lg max-w-96 rounded-">
            <svg xmlns="http://www.w3.org/2000/svg" height={96} width={16}>
            <path
                strokeLinecap="round"
                strokeWidth={2}
                stroke="indianred"
                fill="indianred"
                d="M 8 0 
                Q 4 4.8, 8 9.6 
                T 8 19.2 
                Q 4 24, 8 28.8 
                T 8 38.4 
                Q 4 43.2, 8 48 
                T 8 57.6 
                Q 4 62.4, 8 67.2 
                T 8 76.8 
                Q 4 81.6, 8 86.4 
                T 8 96 
                L 0 96 
                L 0 0 
                Z"
            />
            </svg>
            <div className="flex items-center justify-center mx-10 overflow-hidden w-full">
            <p className="mt-0 text-xl font-bold text-[indianred] leading-9 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                Error 404 !
            </p>
            </div>
        </div>
        </div>
      );
}

export default ErrorPage;