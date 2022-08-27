import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createHashHistory } from "history";

import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'

const history = createHashHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
