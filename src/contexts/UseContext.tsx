import React, { Dispatch, createContext, useContext, useReducer } from "react";
import todosReducer from "./Reducer";
import { todoAction, todoItemProps } from "./type";

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
  {
    id: 3,
    text: "Tailwind CSS",
    completed: false,
  },
];

const TodosContext = createContext<{
  todos: todoItemProps[];
  dispatch: Dispatch<todoAction>;
}>({ todos: initialTodos, dispatch: () => null });

export const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
