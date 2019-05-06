import * as React from 'react'
import { Header } from "./views/Header/Header";
import { TodoInputter } from "../../views/todo/TodoInputter";

export class Main extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <TodoInputter />

      </div>
    )
  }

}