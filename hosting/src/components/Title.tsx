import * as React from 'react';
import { title } from './title.css'

export class Title extends React.Component {
  render() {
    return (
      <h1 className={ title }>Todo App</h1>
    )
  }
}
