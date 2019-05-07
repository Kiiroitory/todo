import * as React from 'react'

interface TodoProps {
  text: string
}

export class TodoView extends React.Component<TodoProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}