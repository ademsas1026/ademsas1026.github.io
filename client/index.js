import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history';

import App from './App.jsx';
// import { Scrolling } from './components'
// establishes socket connection
import './socket';


ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('app')
);

//
