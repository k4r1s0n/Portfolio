/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import logo from "../img/Facetune.jpg";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="container-fluid">
        <Spring
          from={{opacity:0, marginTop: -50}}
          to={{opacity:1, marginTop: 200}}>
          {props => (
            <div style={props}>
              <div id="info" className="text-center">
                <img id="logo" src={logo} alt="logo"/>
                <div id="home-text">
                  <h1>Alex Ibragimov</h1>
                  <h3>Front End Developer</h3>
                </div>
                <div id="links">
                  <a href="https://github.com/k4r1s0n" target="_blank" title="GitHub"><i className="fab fa-github-square"></i></a>
                  <a href="https://www.linkedin.com/in/alex-i-045b00134/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="mailto:oleksandr.ibrahimov@gmail.com" target="_blank" title="Email"><i className="fas fa-envelope-square"></i></a>
                </div>
                <div id="home-nav">
                  <ul id="home-nav-list">
                    <li><a href="https://k4r1s0n.github.io/Portfolio/#/about">About</a></li>
                    <li><a href="https://k4r1s0n.github.io/Portfolio/#/projects">Projects</a></li>
                    <li><a href="https://k4r1s0n.github.io/Portfolio/#/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Spring>
      </div>
    )
  }
}
