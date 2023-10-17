import React, { useState } from "react";

const AddTodo = (props: { addTodo: any }) => {
  const [input, setInput] = useState<string>("");
  const handleClick = (): void => {
    if (input) {
      props.addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-1 text-xl">
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
