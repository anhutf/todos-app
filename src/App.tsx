import React from "react";
import TodoList from "./TodoList";
import TodosProvider from "./contexts/UseContext";
import {
  BookmarkIcon,
  PencilSquareIcon,
  SunIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

function App() {
  const bodyEl = document.querySelector("body");

  const darkMode = () => {
    bodyEl?.classList.toggle("dark");
  };
  return (
    <div className="box-border flex flex-col items-center min-h-screen relative dark:bg-gray-800">
      <div className="w-screen sm:w-[40rem] sm:pt-12 py-4 px-3">
        <div className="my-8 relative">
          <h1 className="text-4xl font-bold text-rose-500 text-center">
            TODOs APP
          </h1>
          <h3 className="text-xl text-rose-700 text-center ">
            Organize your Work
          </h3>
          <SunIcon
            className="h-7 w-7 text-rose-500 hover:scale-110 absolute top-0 right-0"
            onClick={darkMode}
          />
        </div>
        <TodosProvider>
          <TodoList />
        </TodosProvider>
        <div className="remark mt-8 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-md p-2">
          <h3 className="text-sm text-center text-rose-700 uppercase font-semibold">
            Use with todo
          </h3>
          <ul className="flex gap-4 justify-center items-center">
            <li className="flex gap-1">
              <BookmarkIcon className="h-5 w-5 hover:scale-110" />
              <span>Complete</span>
            </li>
            <li className="flex gap-1">
              <PencilSquareIcon className="h-5 w-5 hover:scale-110" />
              <span>Edit task</span>
            </li>
            <li className="flex gap-1">
              <TrashIcon className="h-5 w-5 hover:scale-110" />
              <span>Delete task</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
