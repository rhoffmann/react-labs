import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './routes';

require('./main.scss');
// require('styles.css');

ReactDOM.render((
  <Router routes={routes} history={browserHistory} />
), document.getElementById('app'));
