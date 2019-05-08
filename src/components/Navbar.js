/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";
import resume from '../Download/Areas of Knoledge PDF.pdf';

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
            <a className="navbar-brand" href="/"><i className="fas fa-battery-full" id="battery"></i> Alex Ibragimov</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">CONTACT ME<b className="caret"></b></a>
                <ul className="dropdown-menu" id="navbar-dropdown">
                  <li><a href="https://github.com/k4r1s0n" target="_blank"><i className="fab fa-github-square"></i> GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/alex-i-045b00134/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                  <li><a href="mailto:oleksandr.ibrahimov@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i> Email</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link to={resume} id="download-btn" className="btn btn-warning" target="_blank" >DOWNLOAD RESUME</Link>
    </div>
  );
}

export default Navbar;