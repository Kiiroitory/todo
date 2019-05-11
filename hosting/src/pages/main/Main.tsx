import * as React from 'react'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Header } from "./views/Header/Header";
import { Priority, TodoInputter } from "../../views/TodoInputter/TodoInputter";
import { TodoView } from "./views/Todo/Todo";
import { reducers } from "../../redux/reducers";
import { addTodo } from "../../redux/actions";


interface MainState {
  todos: Todo[]
}

export interface Todo {
  text: string,
  priority: Priority
}

const store = createStore(reducers)

export class Main extends React.Component<{}, MainState> {

  constructor(props) {
    super(props)
    this.state = {todos: []}

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo: Todo) {
    this.setState({todos: this.state.todos.concat(todo)})
  }

  render() {

    return (
      <Provider store={store}>
        <div>
          <Header/>
          <TodoInputter addTodo={this.addTodo}/>
          <ul>
            {this.state.todos.map(todo =>
              <TodoView text={todo.text}/>
            )}
          </ul>
        </div>
      </Provider>
    )
  }

}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: () => dispatch(addTodo())
  }
}
