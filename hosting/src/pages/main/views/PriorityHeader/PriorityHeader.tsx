import * as React from 'react'

interface PriorityHeaderProps {
  title: string
}

export class PriorityHeader extends React.Component<PriorityHeaderProps> {

  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}