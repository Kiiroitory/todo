import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main"
import { Detail } from "./pages/detail/Detail";
// redux対応
import { createStore } from "redux";
import { todo } from "./redux/reducers";
import { StoreState } from "./redux/types";
import { TodoAction } from "./redux/actions";
import { Provider } from 'react-redux';

const store = createStore<StoreState, TodoAction, any, any>(todo, {
  todoId: 0,
  todos: []
})

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/detail/:id' component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);