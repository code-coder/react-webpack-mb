import React, { Component, Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './containers/Home';
import FeaTureV1 from './containers/featrure-v1/Routes';

const LazyRoute = lazy(() => import('./containers/LazyRoute'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter basename={BASE_PREFIX}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/feature-v1" component={FeaTureV1} />
              <Route path="/lazy" render={props => <LazyRoute {...props} />} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Provider>
    );
  }
}

export default hot(module)(App);
