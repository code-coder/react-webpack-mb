import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/base.scss';
import es6promise from 'es6-promise';
es6promise.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
