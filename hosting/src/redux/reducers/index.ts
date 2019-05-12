import { TodoAction} from "../actions";
import { StoreState} from "../types";
import {ADD_TODO} from "../constants";

export function todo(state: StoreState, action: TodoAction): StoreState {
  switch (action.type) {
    case ADD_TODO:
      return { todos: state.todos.concat(action.todo)}
  }
  return state
}