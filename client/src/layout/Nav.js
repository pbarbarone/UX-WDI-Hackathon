import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;

      links = (
        <span>
          <Link to="/stresses">Stresses</Link>
          <Link to="/muses">Muses</Link>
        </span>);


    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
            {links}
          </nav>
          <header className="App-header">
            <h1 className="App-title">Welcome to MERN Stack Boilerplate!</h1>
          </header>
        </div>
      );
  }
}

export default Nav;
