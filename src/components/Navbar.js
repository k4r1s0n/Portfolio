/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";
import resume from '../Download/Areas of Knoledge PDF.pdf';
import Logo from '../img/MyLogoSm.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm fixed-top navbar-light" style={{backgroundColor: "#e3eeff",}}>
        <i className="fas fa-battery-full" id="battery"></i>
        <a className="navbar-brand" href="/"><img src={Logo} alt="logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#">HOM</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/about">ABOUT</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/projects">PROJECTS</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/contact">CONTACT</a>
          </div>
        </div>
      </nav>
      <Link to={resume} id="download-btn" className="btn btn-warning" target="_blank" >DOWNLOAD RESUME</Link>
    </div>
  );
}

export default Navbar;