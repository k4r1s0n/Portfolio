/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuoteMachine from '../img/quote-machine.png';
import MarkdownPreviewer from '../img/markdown-previewer.png';

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
            <h3>Random Quote Machine</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img2.goodfon.ru/wallpaper/nbig/4/bb/vesna-cvety-cvetenie-flower.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default class Projects extends Component {
  render() {
    return (
      <ControlledCarousel/>
    )
  }
}
