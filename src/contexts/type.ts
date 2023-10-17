export enum todoActionKind {
  ADD = "ADD",
  EDIT = "EDIT",
  DEL = "DEL",
}

export interface todoAction {
  type: todoActionKind;
  data: any;
}

export interface todoItemProps {
  id: number;
  text: string;
  completed: boolean;
}
