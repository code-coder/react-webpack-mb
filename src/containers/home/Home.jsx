import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGlobalData } from '../../store/actions/global/global-data';
import Toast from '../../utils/toast';
import logo from '../../assets/logo.svg';

class Home extends Component {
  componentDidMount() {
    Toast.loading('加载了！');
    this.props.dispatch(setGlobalData({ title: 'home' }));
  }
  render() {
    return (
      <div className="home">
        <img src={logo} />
        home
      </div>
    );
  }
}

export default connect()(Home);
