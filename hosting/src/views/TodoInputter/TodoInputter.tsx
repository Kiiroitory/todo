import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actinos from '../../redux/actions'
import { Todo } from "../../pages/main/Main";
import { TodoManager} from "../../models/todo_manager";

export enum Priority {
  High = 'high',
  Middle = 'middle',
  Low = 'low'
}

interface TodoInputterProps {
  addTodo?: (todo: Todo) => void
}

interface TodoInputterState {
  text: string
  priority: Priority
}

export class TodoInputter extends React.Component<TodoInputterProps, TodoInputterState> {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
      priority: Priority.Middle
    }
    this.changeInputTodo = this.changeInputTodo.bind(this)
    this.changeInputPriority = this.changeInputPriority.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  /** プライベートメソッド **/

  /** イベントハンドラ **/

  private changeInputTodo(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: e.target.value
      }
    )
  }

  private changeInputPriority(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      priority: e.target.value as Priority
    })
  }

  private addTodo() {
    console.log(`todo: ${this.state.text}`)
    console.log(`priority: ${this.state.priority}`)
    this.props.addTodo(TodoManager.instance.createTodo(this.state.text, this.state.priority))
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' name='todo' placeholder='タスクを入力' onChange={this.changeInputTodo}/>
          <select value={this.state.priority} onChange={this.changeInputPriority}>
            <option value={Priority.High}>高</option>
            <option value={Priority.Middle}>中</option>
            <option value={Priority.Low}>低</option>
          </select>
          <button type='button' onClick={this.addTodo}>追加</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch<actinos.TodoAction>) {
  return {
    addTodo: (todo) => dispatch(actinos.addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoInputter)