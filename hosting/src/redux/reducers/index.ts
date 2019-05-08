import { ADD_TODO } from "../actions";
import { combineReducers } from "redux";

const initialState = {
  todos: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            priority: action.priority
          }
        ]
      })
    }
    default:
      return state
  }
}

export const reducers = combineReducers({reducer})