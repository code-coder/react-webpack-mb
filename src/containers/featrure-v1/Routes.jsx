import React, { Component, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Index from './Index';

class FeatureV1 extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={Index} />
      </Switch>
    );
  }
}

export default FeatureV1;
