import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Detail } from "./pages/detail/Detail";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/detail' component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));