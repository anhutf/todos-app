import React from "react";
import TodoList from "./TodoList";
import TodosProvider from "./contexts/UseContext";

function App() {
  return (
    <div className="box-border flex flex-col items-center min-h-screen relative">
      <div className="w-screen md:w-[35rem] py-4 px-3">
        <div className="my-8">
          <h1 className="text-4xl font-bold text-rose-500 text-center">
            TODOs APP
          </h1>
          <h3 className="text-xl text-rose-700 text-center ">
            Organize your Work
          </h3>
        </div>
        <TodosProvider>
          <TodoList />
        </TodosProvider>
      </div>
    </div>
  );
}

export default App;
