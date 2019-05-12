import { Priority } from "../../views/TodoInputter/TodoInputter";

export interface StoreState {
  todos: Todo[]
}

export interface Todo {
  id: number
  text: string
  priority: Priority
}