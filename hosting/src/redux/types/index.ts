import { Priority } from "../../views/TodoInputter/TodoInputter";

export interface StoreState {
  todoId: number
  todos: Todo[]
}

export interface Todo {
  id: number
  text: string
  priority: Priority
  completed: boolean
}