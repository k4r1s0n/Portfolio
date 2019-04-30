/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import logo from "../img/Facetune.jpg"

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="square-wrap"></div>
        <div id="info" className="text-center">
          <img id="logo" src={logo} alt="logo"/>
          <h1>Hi I'm Alex</h1>
          <h3>a web developer</h3>
          <div id="links">
            <a href="https://github.com/k4r1s0n" target="_blank"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/alex-i-045b00134/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:oleksandr.ibrahimov@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
          </div>
        </div>
      </div>
    )
  }
}
