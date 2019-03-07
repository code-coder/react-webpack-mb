import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import HomeRoute from './containers/home/Index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={BASE_PREFIX}>
          <Switch>
            <Route exact path="/" component={HomeRoute} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
