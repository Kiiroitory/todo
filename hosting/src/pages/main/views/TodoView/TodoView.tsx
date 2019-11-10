import * as React from 'react'
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import * as actions from '../../../../redux/actions/index'
import { connect } from "react-redux";
import { toggleTodo } from "../../../../redux/actions/index";

interface TodoViewProps {
  id: number
  text: string
  toggleTodo?: (number) => void
}

class TodoView extends React.Component<TodoViewProps, {}> {

  constructor(props) {
    super(props)
    
    this.toggleTodo = this.toggleTodo.bind(this)
  }
  
  private toggleTodo() {
    this.props.toggleTodo!(this.props.id)
  }

  render() {
    const liStyle = {listStyle: 'none'}
    const buttonStyle = {marginRight: '5px'}
    return (
      <React.Fragment>
        <li style={liStyle}><button style={buttonStyle} onClick={this.toggleTodo}>○</button><Link to={`/detail/${this.props.id}`}>{this.props.text}</Link></li>
      </React.Fragment>
    )
  }
}

export default connect(null, { toggleTodo })(TodoView)