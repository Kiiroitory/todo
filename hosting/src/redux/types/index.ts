import { Priority } from "../../views/TodoInputter/TodoInputter";
import { DisplayType } from "../../pages/main/views/DisplaySelecter/DisplaySelecter";
import { DisplayState, TodoState } from "../reducers";

export interface StoreState {
  display: DisplayState
  todo: TodoState
}


export interface Todo {
  id: number
  text: string
  priority: Priority
  completed: boolean
}