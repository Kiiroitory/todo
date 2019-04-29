import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Title } from "./components/Title";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title></Title>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));