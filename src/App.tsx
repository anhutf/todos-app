import React from "react";
import TodoList from "./TodoList";
import TodosProvider from "./contexts/UseContext";

function App() {
  return (
    <div className="box-border flex flex-col items-center">
      <div className="w-[35rem] my-12 mx-8">
        <div className="my-6">
          <h1 className="text-5xl font-bold text-rose-500 text-center">
            Todos App
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
