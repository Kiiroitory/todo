import * as React from 'react'
import { Header } from "./views/Header/Header";
import { Todo } from "../../views/todo/Todo";

export class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Todo />

      </div>
    )
  }

}