import React from "react";
import { useTodos } from "./contexts/UseContext";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  return (
    <div className="TodoList">
      <AddTodo />
      <DisplayTodo completed={false} />
      <div className="mt-6">
        <h3 className="text-sm text-rose-700 uppercase font-semibold">
          (
          {todos.reduce((count, cur) => (cur.completed ? count + 1 : count), 0)}
          ) Completed
        </h3>
        <DisplayTodo completed={true} />
      </div>
    </div>
  );
};

export default TodoList;
