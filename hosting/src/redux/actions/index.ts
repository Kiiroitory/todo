import * as constants from '../constants'
import { Todo } from "../types";

export interface AddTodo {
  type: constants.ADD_TODO
  todo: Todo
}

export type TodoAction = AddTodo

export function addTodo(todo: Todo) : AddTodo {
  return {
    type: constants.ADD_TODO,
    todo: todo
  }
}