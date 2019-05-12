import * as constants from '../constants'
import { Priority } from "../../views/TodoInputter/TodoInputter";
import { Todo } from "../types";

/** Actionの定義 **/
export interface AddTodo {
  type: constants.ADD_TODO
  text: string
  priority: Priority
}

export interface CompleteTodo {
  type: constants.COMPLETE_TODO
  id: number
}

export type TodoAction = AddTodo | CompleteTodo


/** ActionCreatorの定義 **/

export function addTodo(text: string, priority: Priority): AddTodo {
  return {
    type: constants.ADD_TODO,
    text: text,
    priority: priority
  }
}

export function completeTodo(id: number): CompleteTodo {
  return { type: constants.COMPLETE_TODO, id}
}