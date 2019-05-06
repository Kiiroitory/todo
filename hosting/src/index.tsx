import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from "./pages/main/Main";

class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));