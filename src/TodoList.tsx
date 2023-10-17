import React, { useContext, useState } from "react";
import { TodosContext } from "./contexts/UseContext";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    {
      id: 1,
      text: "Learn TypeScript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn ReactJs",
      completed: true,
    },
  ]);

  const handleClick = (input: any): void => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="TodoList">
      <AddTodo addTodo={handleClick} />
      <DisplayTodo todoTask={todos} todoComplete={handleToggle} />
    </div>
  );
};

export default TodoList;
