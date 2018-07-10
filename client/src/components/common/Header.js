import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">AppName</a>
            <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
