import { Priority } from "../../views/TodoInputter/TodoInputter";

export const ADD_TODO = 'ADD_TODO'

export function addTodo(text: string, priority: Priority) {
  return {
    type: ADD_TODO,
    text: text,
    priority: Priority
  }
}