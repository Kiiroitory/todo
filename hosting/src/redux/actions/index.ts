import * as constants from '../constants'
import { Todo } from "../types";
import { Priority } from "../../views/TodoInputter/TodoInputter";
import { string } from "prop-types";

export interface AddTodo {
  type: constants.ADD_TODO
  text: string
  priority: Priority
}

export type TodoAction = AddTodo

export function addTodo(text: string, priority: Priority) : AddTodo {
  return {
    type: constants.ADD_TODO,
    text: text,
    priority: priority
  }
}