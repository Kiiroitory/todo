import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main"
import { Detail } from "./pages/detail/Detail";
// redux対応
import { createStore, compose } from "redux";
import { rootReducer, todo } from "./redux/reducers";
import { StoreState } from "./redux/types";
import { TodoAction } from "./redux/actions";
import { Provider } from 'react-redux';
import { Either, fromNullable, left, right } from "fp-ts/lib/Either";
import { Option, some, none} from "fp-ts/lib/Option";
import { number } from "prop-types";
import { log } from "util";

const store = createStore<StoreState, any, any, any>(rootReducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] as typeof compose &&  (window as any).__REDUX_DEVTOOLS_EXTENSION__())


class App extends React.Component {

  * range(start = 0, finish = Number.POSITIVE_INFINITY) {
    for (let i = start; i< finish; i++) {
      console.log(`yieldの前${i}`)
      yield i;
      console.log(`yieldの後${i}`)
    }
  }

  componentDidMount(): void {

    const num = this.range(1)
    console.log('ログ出力開始')
    console.log(num.next().value)
  }

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