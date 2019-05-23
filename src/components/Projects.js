/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuoteMachine from '../img/quote-machine.png';
import MarkdownPreviewer from '../img/markdown-previewer.png';
import Calculatop from '../img/javascript-calculator.png';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <a href='https://codepen.io/k4r1s0n/full/VRaEVm' target="_blank"><img
            className="d-block w-100"
            src={QuoteMachine}
            alt="First slide"
          /></a>
          
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Random Quote Generator</h3>
              <h4>Technologies: HTML5, CSS3, Bootstrap, jQuery, JavaScript</h4>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://codesandbox.io/s/markdownviewer-ojb9m' target="_blank">
            <img
            className="d-block w-100"
            src={MarkdownPreviewer}
            alt="Second slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Markdown Previewer</h3>
              <h4>Technologies: HTML5, CSS3, Bootstrap, React, JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://codesandbox.io/s/reactcalculator-38olq' target="_blank">
            <img
            className="d-block w-100"
            src={Calculatop}
            alt="Third slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>JavaScript Calculatop</h3>
              <h4>Technologies: HTML5, CSS3, React, JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="text-center">
        <h1>My Projects</h1>
        <div id="slider" className="container">
          <ControlledCarousel/>
        </div>
      </div>
      
      
    )
  }
}
