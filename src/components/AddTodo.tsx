import React, { useState } from "react";
import { useTodos } from "../contexts/UseContext";
import { todoActionKind } from "../contexts/type";

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const { dispatch } = useTodos();

  const add = () => {
    dispatch({ type: todoActionKind.ADD, data: { text: input } });
  };
  const handleClick = (): void => {
    if (input) {
      add();
      setInput("");
    }
  };

  return (
    <div className="flex gap-1 text-xl mb-6">
      <input
        className="flex-1 border border-rose-200 focus:outline-rose-400 rounded-md py-2 px-3 "
        type="text"
        placeholder="Add todo item"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button
        className="flex-none bg-rose-400 hover:bg-rose-500 rounded-md py-2 px-5 text-white"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
