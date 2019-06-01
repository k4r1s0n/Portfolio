/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from "react-router-dom";
import resume from '../Download/Areas of Knoledge PDF.pdf';
import Logo from '../img/MyLogoSm.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navibar() {
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><img src={Logo} className="img-fluid" alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" defaultActiveKey="home" variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="home" href="https://k4r1s0n.github.io/Portfolio/#/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about" href="https://k4r1s0n.github.io/Portfolio/#/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="projects" href="https://k4r1s0n.github.io/Portfolio/#/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact" href="https://k4r1s0n.github.io/Portfolio/#/contact">Contact</Nav.Link>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about" href="/#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="projects" href="/#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact" href="/#contact">Contact</Nav.Link>
          </Nav.Item> */}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Link to={resume} id="download-btn" className="btn btn-warning btn-sm" target="_blank" >DOWNLOAD RESUME</Link>
      <nav className="navbar fixed-bottom navbar-transparent" style={{fontSize: '20px', height: '40px'}}>
       <p>Powered by <i className="fab fa-react"></i> React</p>
      </nav>
    </div>
  );
}

export default Navibar;