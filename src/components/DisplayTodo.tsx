import React, { useState } from "react";
import { useTodos } from "../contexts/UseContext";
import EditTodoss from "./EditTodo";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { todoActionKind, todoItemProps } from "../contexts/type";

const DisplayTodo = (props: { completed: boolean }) => {
  const { todos, dispatch } = useTodos();
  const [todoPopUp, setTodoPopUp] = useState<todoItemProps | null>(null);

  const completeTodo = (todo: todoItemProps) => {
    dispatch({
      type: todoActionKind.EDIT,
      data: { ...todo, completed: !todo.completed },
    });
  };

  const deleteTodo = (todo: todoItemProps) => {
    dispatch({ type: todoActionKind.DEL, data: todo });
  };

  return (
    <div className="TodoList">
      {todoPopUp && (
        <EditTodoss todo={todoPopUp} onClosePopUp={() => setTodoPopUp(null)} />
      )}

      <ul className="text-lg">
        {todos
          .filter((todo) => todo.completed === props.completed)
          .sort((a, b) => b.id - a.id)
          .map((todo: todoItemProps) => (
            <li
              className="flex gap-2 items-center p-3 rounded-md bg-gray-50 dark:bg-gray-700 mt-1"
              key={todo.id}
            >
              {!todo.completed ? (
                <BookmarkIcon
                  className="flex-none h-6 w-6 text-green-600 hover:scale-110"
                  onClick={() => completeTodo(todo)}
                />
              ) : (
                <BookmarkSlashIcon
                  className="flex-none h-6 w-6 text-gray-500 hover:scale-110"
                  onClick={() => completeTodo(todo)}
                />
              )}
              <p
                className={`flex-grow truncate hover:text-clip ${
                  todo.completed
                    ? "text-gray-500 dark:text-gray-400 line-through"
                    : ""
                } dark:text-gray-100`}
              >
                {todo.text}
              </p>
              <PencilSquareIcon
                className="flex-none h-6 w-6 text-rose-400 hover:scale-110"
                onClick={() => setTodoPopUp(todo)}
              />
              <TrashIcon
                className="flex-none h-6 w-6 text-red-500 hover:scale-110"
                onClick={() => deleteTodo(todo)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DisplayTodo;
