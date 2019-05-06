import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./main/views/header/Header";
import { Todo } from "./views/todo/Todo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todo />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));