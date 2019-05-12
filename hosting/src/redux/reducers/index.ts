import { TodoAction} from "../actions";
import { StoreState, Todo } from "../types";
import {ADD_TODO} from "../constants";

export function todo(state: StoreState, action: TodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      const newTodoId = state.todoId + 1
      const newTodo: Todo = { id: newTodoId, text: action.text, priority: action.priority, completed: false}
      return { todoId: newTodoId, todos: state.todos.concat(newTodo)}
  }
  return state
}