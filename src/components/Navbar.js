/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";
import resume from '../Download/Areas of Knoledge PDF.pdf';
import Logo from '../img/MyLogoSm.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md fixed-top navbar-light" style={{backgroundColor: "#e3eeff",}}>
        <a className="navbar-brand" href="https://k4r1s0n.github.io/Portfolio/#/"><img src={Logo} className="img-fluid" alt="logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/">HOME</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/about">ABOUT</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/projects">PROJECTS</a>
            <a className="nav-item nav-link" href="https://k4r1s0n.github.io/Portfolio/#/contact">CONTACT</a>
            {/* <a className="nav-item nav-link" href="/">Home</a>
            <a className="nav-item nav-link" href="/#about">About</a>
            <a className="nav-item nav-link" href="/#projects">Projects</a>
            <a className="nav-item nav-link" href="/#contact">Contact</a> */}
          </div>
        </div>
      </nav>
      <Link to={resume} id="download-btn" className="btn btn-warning btn-sm" target="_blank" >DOWNLOAD RESUME</Link>
      <nav class="navbar fixed-bottom navbar-transparent" style={{fontSize: '20px', height: '40px'}}>
       <p>Powered by <i class="fab fa-react"></i> React</p>
      </nav>
    </div>
  );
}

export default Navbar;