import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Logged from './pages/Logged'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <ul className="App-header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/logged">Logged</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/logged' component={Logged} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
