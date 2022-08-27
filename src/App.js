import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import Logged from './pages/Logged'

function App() {
  return (
    <div className="App">
      <ul className="App-header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/logged">Logged</Link></li>
      </ul>
      <Switch>
        <Route match exact path='/' component={Home} />
        <Route match path='/about' component={About} />
        <Route match path='/logged' component={Logged} />
      </Switch>
    </div>
  );
}

export default App;
