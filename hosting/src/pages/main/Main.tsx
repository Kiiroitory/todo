import * as React from 'react'
import { Header } from "./views/Header/Header";
import { Priority, TodoInputter } from "../../views/TodoInputter/TodoInputter";
import { TodoView } from "./views/TodoView/TodoView";
import { PriorityHeader } from "./views/PriorityHeader/PriorityHeader";


interface MainState {
  todos: Todo[]
}

export interface Todo {
  id: number
  text: string
  priority: Priority
}

export class Main extends React.Component<{}, MainState> {

  constructor(props) {
    super(props)
    this.state = { todos: [] }

    this.addTodo = this.addTodo.bind(this)
    this.todoViews  = this.todoViews.bind(this)
  }

  private addTodo(todo: Todo) {
    this.setState({ todos: this.state.todos.concat(todo)})
  }

  private todoViews(priority: Priority): JSX.Element[] {
    return this.state.todos.filter( todo => todo.priority === priority).map( todo => {
        console.log(`todo: ${JSON.stringify(todo)}`)
        return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  render() {

    return (
      <div>
        <Header />
        <TodoInputter addTodo={this.addTodo}/>
        <PriorityHeader title='優先度 - 高' />
        <ul>
          {this.todoViews(Priority.High)}
        </ul>
        <PriorityHeader title='優先度 - 中' />
        <ul>
          {this.todoViews(Priority.Middle)}
        </ul>
        <PriorityHeader title='優先度 - 低' />
        <ul>
          {this.todoViews(Priority.Low)}
        </ul>
      </div>
    )
  }

}