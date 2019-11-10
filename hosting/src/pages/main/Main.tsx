import * as React from 'react'
import { Header } from "./views/Header/Header";
import TodoInputter, { Priority } from "../../views/TodoInputter/TodoInputter";
import TodoView from "./views/TodoView/TodoView";
import { PriorityHeader } from "./views/PriorityHeader/PriorityHeader";
import { StoreState, Todo } from "../../redux/types";
import { connect } from "react-redux";
import DisplaySelecter, { DisplayType } from "./views/DisplaySelecter/DisplaySelecter";


interface MainProps {
  display: DisplayType
  todos: Todo[]
}

class Main extends React.Component<MainProps> {

  constructor(props) {
    super(props)
    this.todoViews = this.todoViews.bind(this)
    this.completedViews = this.completedViews.bind(this)
  }

  render() {
    return (
      <div>
        <Header/>
        <TodoInputter/>
        <DisplaySelecter/>
        { this.isShowTodo() ? this.renderTodos() : null }
        { this.isShowDone() ? this.renderDone() : null }
      </div>
    )
  }

  private isShowTodo(): boolean {
    return this.props.display === DisplayType.ALL || this.props.display === DisplayType.TODO
  }

  private renderTodos(): JSX.Element {
    return (
      <>
        <PriorityHeader title='優先度 - 高'/>
        <ul>
          {this.todoViews(Priority.High)}
        </ul>
        <PriorityHeader title='優先度 - 中'/>
        <ul>
          {this.todoViews(Priority.Middle)}
        </ul>
        <PriorityHeader title='優先度 - 低'/>
        <ul>
          {this.todoViews(Priority.Low)}
        </ul>
      </>
    )
  }

  private todoViews(priority: Priority): JSX.Element[] {
    return this.props.todos.filter(todo => todo.priority === priority && todo.completed === false).map(todo => {
      console.log(`todo: ${JSON.stringify(todo)}`)
      return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }

  private isShowDone(): boolean {
    return this.props.display === DisplayType.ALL || this.props.display === DisplayType.COMPLETE
  }

  private renderDone(): JSX.Element {
    return (
      <>
        <PriorityHeader title='完了'/>
        <ul>
          {this.completedViews()}
        </ul>
      </>
    )

  }

  private completedViews(): JSX.Element[] {
    return this.props.todos.filter(todo => todo.completed === true).map(todo => {
      console.log(`todo: ${JSON.stringify(todo)}`)
      return <TodoView key={todo.id} id={todo.id} text={todo.text}/>
    })
  }
}

function mapStateToProps({display, todo}: StoreState): MainProps {
  return {display: display.displayType, todos: todo.todos}
}

export default connect(mapStateToProps, null)(Main)