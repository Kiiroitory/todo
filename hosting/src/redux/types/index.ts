import { Priority } from "../../views/TodoInputter/TodoInputter";
import { DisplayType } from "../../pages/main/views/DisplaySelecter/DisplaySelecter";

export interface StoreState {
  displayType: DisplayType
  todoId: number
  todos: Todo[]
}

export interface Todo {
  id: number
  text: string
  priority: Priority
  completed: boolean
}