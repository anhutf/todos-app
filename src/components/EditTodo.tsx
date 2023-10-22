import React, { useState } from "react";
import { useTodos } from "../contexts/UseContext";
import { todoItemProps, todoActionKind } from "../contexts/type";

interface todoPopUpProps {
  onClosePopUp: () => void;
  todo: todoItemProps;
}

const EditTodoss = ({ onClosePopUp, todo }: todoPopUpProps) => {
  const [editTodo, setEditTodo] = useState(todo.text || "");
  const { dispatch } = useTodos();

  const handleEditTodo = (e: any) => {
    e.preventDefault();

    dispatch({
      type: todoActionKind.EDIT,
      data: { ...todo, text: editTodo },
    });

    onClosePopUp();
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex bg-gray-100 bg-opacity-70 text-xl p-3">
      <form
        className="m-auto w-[30rem] bg-white dark:bg-gray-700 p-8 rounded-md flex flex-col gap-5"
        onSubmit={handleEditTodo}
      >
        <input
          className="block border border-rose-400 outline-none focus:border-rose-500 rounded-md py-2 px-3 dark:bg-gray-600 dark:text-white dark:placeholder-gray-500"
          type="text"
          placeholder="Add todo item"
          value={editTodo}
          onChange={(e) => setEditTodo(e.currentTarget.value)}
        />
        <div className="text-center text-white">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 rounded-md py-2 px-5"
          >
            Save
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 rounded-md py-2 px-5 ml-4"
            onClick={onClosePopUp}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodoss;
