import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actinos from '../../redux/actions'
import { Todo } from "../../redux/types";
import { addTodo } from "../../redux/actions";

export enum Priority {
  High = 'high',
  Middle = 'middle',
  Low = 'low'
}

interface TodoInputterProps {
  addTodo?: (text: string, priority: Priority) => void
}

interface TodoInputterState {
  text: string
  priority: Priority
}

class TodoInputter extends React.Component<TodoInputterProps, TodoInputterState> {

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
    this.props.addTodo!(this.state.text, this.state.priority)
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


export default connect(null, { addTodo })(TodoInputter)