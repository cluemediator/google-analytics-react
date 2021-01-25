import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import RoutingComponent from './RoutingComponent';

// add google analytics
import ReactGA from 'react-ga';
ReactGA.initialize('<TRACKING_ID>');

ReactDOM.render(<BrowserRouter>
  <h3>Add Google Analytics to React App - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
  <RoutingComponent />
</BrowserRouter>, document.getElementById('root'));