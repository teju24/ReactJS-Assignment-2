import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';
import AboutUsComponent from './AboutUsComponent';

const Link =()=>(
  <div>
  <NavLink activeClassName="selected" to='/home'>Home </NavLink> |
  <NavLink activeClassName="selected" to='/about'>About Us </NavLink> |
  <NavLink  activeClassName="selected" to='/contact'>Contact Us </NavLink>
  </div>
);

const RouterComponent =()=>(
  <Router>
    <Link />
    <Route exact path="/home" component={HomeComponent}></Route>
    <Route exact path="/about" component={AboutUsComponent}></Route>
    <Route exact path="/contact" component={ContactComponent}></Route>
  </Router>
);

ReactDOM.render(
    <RouterComponent />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
