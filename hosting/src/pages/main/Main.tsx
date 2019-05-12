import * as React from 'react'
import { Header } from "./views/Header/Header";
import TodoInputter, { Priority } from "../../views/TodoInputter/TodoInputter";
import { TodoView } from "./views/TodoView/TodoView";
import { PriorityHeader } from "./views/PriorityHeader/PriorityHeader";
import { StoreState, Todo } from "../../redux/types";
import { connect } from "react-redux";


interface MainProps {
  todos: Todo[]
}

class Main extends React.Component<MainProps> {

  constructor(props) {
    super(props)
    this.todoViews  = this.todoViews.bind(this)
    this.completedViews = this.completedViews.bind(this)
  }

  private todoViews(priority: Priority): JSX.Element[] {
    return this.props.todos.filter( todo => todo.priority === priority && todo.completed === false).map( todo => {
        console.log(`todo: ${JSON.stringify(todo)}`)
        return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  private completedViews(): JSX.Element[] {
    return this.props.todos.filter( todo => todo.completed === true).map( todo => {
      console.log(`todo: ${JSON.stringify(todo)}`)
      return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  render() {

    return (
      <div>
        <Header />
        <TodoInputter/>
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
        <PriorityHeader title='完了' />
        <ul>
          {this.completedViews()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ todos }: StoreState) {
  return { todos }
}

export default connect(mapStateToProps, null)(Main)