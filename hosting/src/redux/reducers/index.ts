import { DisplayAction, TodoAction } from "../actions";
import { StoreState, Todo } from "../types";
import { ADD_TODO, CHANGE_DISPLAY, TOGGLE_TODO } from "../constants";
import { DisplayType } from "../../pages/main/views/DisplaySelecter/DisplaySelecter";
import { combineReducers } from "redux";

export interface TodoState {
  todoId: number // TODOを一意に認識するために割り当てるユニークIDを管理する（発行する毎に+1される）
  todos: Todo[]
}

const initialState: TodoState = {
  todoId: 0,
  todos: []
}


export function todo(state: TodoState = initialState, action: TodoAction): TodoState {

  switch (action.type) {

    case ADD_TODO:
      const newTodoId = state.todoId + 1
      const newTodo: Todo = { id: newTodoId, text: action.text, priority: action.priority, completed: false}
      return {...state, todoId: newTodoId, todos: state.todos.concat(newTodo)}

    case TOGGLE_TODO:
      console.log(`action.id: ${action.id}`)
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
      console.log(`todos: ${JSON.stringify(newTodos)}`)
      return {...state, todos: newTodos }
  }
  return state
}


export interface DisplayState {
  displayType: DisplayType
}

const initialDisplayState: DisplayState = {
  displayType: DisplayType.ALL
}

function display(state: DisplayState = initialDisplayState, action: DisplayAction): DisplayState {

  switch (action.type) {
    case CHANGE_DISPLAY:
      return {...state, displayType: action.displayType}
  }
  return state
}

export const rootReducer = combineReducers<StoreState>({
  todo: todo,
  display: display
})
