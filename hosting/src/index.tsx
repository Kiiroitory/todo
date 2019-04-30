import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));