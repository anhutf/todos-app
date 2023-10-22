import React from "react";
import { useTodos } from "./contexts/UseContext";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  const countTodo = todos.reduce(
    (count, cur) => (!cur.completed ? count + 1 : count),
    0
  );

  const countTodoCompleted = todos.reduce(
    (count, cur) => (cur.completed ? count + 1 : count),
    0
  );

  return (
    <div className="TodoList">
      <AddTodo />
      {countTodo !== 0 ? (
        <DisplayTodo completed={false} />
      ) : (
        <p className="text-lg text-gray-300 p-3 rounded-md bg-gray-50 dark:bg-gray-700 mt-1">
          No todo
        </p>
      )}
      <div className="mt-6">
        <h3 className="text-sm text-rose-700 uppercase font-semibold">
          ({countTodoCompleted}) Completed
        </h3>
        {countTodoCompleted !== 0 ? (
          <DisplayTodo completed={true} />
        ) : (
          <p className="text-lg text-gray-300 p-3 rounded-md bg-gray-50 dark:bg-gray-700 mt-1">
            No todo completed
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
