import * as React from 'react'
import { Header } from "./views/Header/Header";
import TodoInputter, { Priority } from "../../views/TodoInputter/TodoInputter";
import TodoView from "./views/TodoView/TodoView";
import { PriorityHeader } from "./views/PriorityHeader/PriorityHeader";
import { StoreState, Todo } from "../../redux/types";
import { connect } from "react-redux";
import DisplaySelecter, { DisplayType } from "./views/DisplaySelecter/DisplaySelecter";
import { DisplayState, TodoState } from "../../redux/reducers";


interface MainProps {
  todo: TodoState
  display: DisplayState
}

class Main extends React.Component<MainProps> {

  constructor(props) {
    super(props)
    this.todoViews  = this.todoViews.bind(this)
    this.completedViews = this.completedViews.bind(this)
  }

  private todoViews(priority: Priority): JSX.Element[] {
    return this.props.todo.todos.filter( todo => todo.priority === priority && todo.completed === false).map( todo => {
        console.log(`todo: ${JSON.stringify(todo)}`)
        return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  private completedViews(): JSX.Element[] {
    return this.props.todo.todos.filter( todo => todo.completed === true).map( todo => {
      console.log(`todo: ${JSON.stringify(todo)}`)
      return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  // TOOD: displayTypeに応じて表示する要素を修正すること
  render() {

    return (
      <div>
        <Header />
        <TodoInputter/>
        <DisplaySelecter/>
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

function mapStateToProps({ display, todo }: StoreState): MainProps {
  return { display, todo }
}

export default connect(mapStateToProps, null)(Main)