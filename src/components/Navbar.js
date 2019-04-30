/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><i className="fas fa-battery-full" id="battery"></i> Alex Ibragimov</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Contact Me<b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="https://github.com/k4r1s0n" target="_blank"><i className="fab fa-github-square"></i> GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/alex-i-045b00134/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                  <li><a href="mailto:oleksandr.ibrahimov@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i> Email</a></li>
                  <li className="divider"></li>
                  <li><a href="#"><i className="fas fa-mobile-alt"></i> Phone Number</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;