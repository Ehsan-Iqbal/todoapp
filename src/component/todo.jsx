import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "task 1",
    },
    {
      id: 2,
      task: "task 2",
    },
    {
      id: 3,
      task: "task 3",
    },
    {
      id: 4,
      task: "task 4",
    },
    {
      id: 5,
      task: "task 5",
    },
  ]);

  function removeTaskHandler(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="max-w-sm p-6 w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold text-center text-gray-900 dark:text-white">
            To-Do-List
          </h5>
        </a>

        <div className="">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="location-search"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search for city or address"
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-red-700 rounded-e-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                ADD
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mt-2">
          {tasks.map((currenttask, index) => (
            <li
              key={currenttask.id}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg dark:bg-gray-700"
            >
              <span className="text-white text-xs">{currenttask.task}</span>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => removeTaskHandler(index)}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
