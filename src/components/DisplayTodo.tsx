import React from "react";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const DisplayTodo = (props: any) => {
  const handleToggle = (id: number): void => {
    props.todoComplete(id);
  };
  return (
    <ul className="mt-4">
      {props.todoTask.map((todo: any) => (
        <li className="flex gap-2 p-3 rounded-md bg-gray-50 mt-1" key={todo.id}>
          {todo.completed === false ? (
            <BookmarkIcon className="flex-none h-6 w-6 text-green-600" />
          ) : (
            <BookmarkSlashIcon className="flex-none h-6 w-6 text-gray-500" />
          )}
          <p className="flex-grow" onClick={() => handleToggle(todo.id)}>
            {todo.text}
          </p>
          <PencilSquareIcon className="flex-none h-6 w-6 text-rose-400" />
          <TrashIcon className="flex-none h-6 w-6 text-red-500" />
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
