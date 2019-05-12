import * as React from 'react'
import { Link } from "react-router-dom";

interface TodoProps {
  id: number
  text: string
}

export class TodoView extends React.Component<TodoProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const liStyle = {listStyle: 'none'}
    const buttonStyle = {marginRight: '5px'}
    return (
      <React.Fragment>
        <li style={liStyle}><button style={buttonStyle}>○</button><Link to={`/detail/${this.props.id}`}>{this.props.text}</Link></li>
      </React.Fragment>
    )
  }
}