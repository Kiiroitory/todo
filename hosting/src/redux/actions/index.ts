import * as constants from '../constants'
import { Priority } from "../../views/TodoInputter/TodoInputter";
import { Todo } from "../types";

/** Actionの定義 **/
export interface AddTodo {
  type: constants.ADD_TODO
  text: string
  priority: Priority
}

export interface ToggleTodo {
  type: constants.TOGGLE_TODO
  id: number
}

export type TodoAction = AddTodo | ToggleTodo


/** ActionCreatorの定義 **/

export function addTodo(text: string, priority: Priority): AddTodo {
  return {
    type: constants.ADD_TODO,
    text: text,
    priority: priority
  }
}

export function toggleTodo(id: number): ToggleTodo {
  return { type: constants.TOGGLE_TODO, id}
}