import React, { useState } from "react";
import { useTodos } from "../contexts/UseContext";
import { todoActionKind } from "../contexts/type";

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const { dispatch } = useTodos();

  const add = () => {
    dispatch({ type: todoActionKind.ADD, data: { text: input } });
  };
  const handleClick = (e: any): void => {
    e.preventDefault();

    if (input) {
      add();
      setInput("");
    }
  };

  return (
    <form className="flex gap-1 text-xl mb-6" onSubmit={handleClick}>
      <input
        className="flex-1 border border-rose-400 outline-none focus:border-rose-500 rounded-md py-2 px-3 placeholder:text-gray-300 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500"
        type="text"
        placeholder="Add todo item"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button
        type="submit"
        className="flex-none bg-rose-400 hover:bg-rose-500 rounded-md py-2 px-6 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
