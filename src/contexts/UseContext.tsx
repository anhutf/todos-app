import React, { createContext, useContext, useReducer } from "react";
import todosReducer from "./Reducer";
import { todoAction, todoItemProps } from "./type";

export const TodosContext = createContext<{
  todos: todoItemProps[];
  dispatch: React.Dispatch<todoAction>;
} | null>(null);

const initialTodos: todoItemProps[] = [
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
];

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
