import * as React from 'react'

interface TodoProps {
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
        <li style={liStyle}><button style={buttonStyle}>○</button>{this.props.text}</li>
      </React.Fragment>
    )
  }
}