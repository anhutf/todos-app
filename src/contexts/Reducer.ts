import { todoItemProps, todoAction, todoActionKind } from "./type";

const todosReducer = (todos: todoItemProps[], action: todoAction) => {
  switch (action.type) {
    case todoActionKind.ADD: {
      return [
        ...todos,
        { id: Date.now(), text: action.data.text, completed: false },
      ];
    }

    case todoActionKind.EDIT: {
      return todos.map((todo) => {
        if (todo.id === action.data.id) {
          return { ...todo, text: action.data.text };
        }
        return todo;
      });
    }

    case todoActionKind.DEL: {
      return todos.filter((todo) => todo.id !== action.data.id);
    }
  }
};

export default todosReducer;
