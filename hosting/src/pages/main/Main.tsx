import * as React from 'react'
import { Header } from "./views/Header/Header";
import { Priority, TodoInputter } from "../../views/TodoInputter/TodoInputter";
import { TodoView } from "./views/Todo/Todo";


interface MainState {
  todos: Todo[]
}

export interface Todo {
  text: string,
  priority: Priority
}

export class Main extends React.Component<{}, MainState> {

  constructor(props) {
    super(props)
    this.state = { todos: [] }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo: Todo) {
    this.setState({ todos: this.state.todos.concat(todo)})
  }

  render() {

    return (
      <div>
        <Header />
        <TodoInputter addTodo={this.addTodo}/>
        <ul>
          {this.state.todos.map( todo =>
            <TodoView text={todo.text}/>
          )}
        </ul>
      </div>
    )
  }

}