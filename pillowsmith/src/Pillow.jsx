import { useState } from 'react';
import './App.css';

function Pillow({ name, num, description }) {

return (
    <>
            <div className="flex pl-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-blue-300">
                    <div className="flex items-center">
                            <p className="text-left -ml-3 mr-3 justify-self-center font-bold text-lg text-blue-500 underline">{num}</p>
                    </div>
                    <div className="flex flex-col items-stretch m-0 p-6 bg-white border-l border-gray-200 shadow-x dark:bg-gray-800 dark:border-gray-700 w-full rounded-r-md">
                            <a href="#">
                                    <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            </a>
                            <p className="flex mb-8 font-normal text-gray-500 dark:text-gray-400">{description}</p>
                            <div className="flex justify-center">
                                    <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-56">Shop now at Amazon.com</a>
                            </div>
                    </div>
            </div>
    </>
)
}

export default Pillow

