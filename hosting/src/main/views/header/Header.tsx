import * as React from 'react'
import { Title } from "./Title";
import { header } from './header.css'


export class Header extends React.Component {
  render() {
    return (
      <div className={ header }>
        <Title />
      </div>
  )
  }
}