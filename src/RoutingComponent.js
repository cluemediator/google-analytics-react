import React, { useEffect } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import App from './App';
import About from './About';
import Contact from './Contact';

import ReactGA from 'react-ga';

const RoutingComponent = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  
  return <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
}

export default withRouter(RoutingComponent);