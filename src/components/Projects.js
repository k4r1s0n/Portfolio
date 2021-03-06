/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
import Carousel from 'react-bootstrap/Carousel';
import QuoteMachine from '../img/quote-machine.png';
import MarkdownPreviewer from '../img/markdown-previewer.png';
import Calculatop from '../img/javascript-calculator.png';
import DrumMachine from '../img/drum-machine.png';
import PomodoroClock from '../img/pomodoro-clock.png';
import WeatherApp from '../img/weather-app.png';
import jQueryIcon from '../img/jquery-icon.png' ;

const htmlLogo = <i class="fab fa-html5"></i>;
const cssLogo = <i class="fab fa-css3-alt"></i>;
const jSLogo = <i class="fab fa-js-square"></i>;
const btstrpLogo = <i class="fab fa-bootstrap"></i>;
const reactLogo = <i class="fab fa-react"></i>;
export const jQLogo = <img src={jQueryIcon} alt="jQueryIcon" style={{marginBottom:4, color:'#ff9100'}}></img>
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
          <a href='https://k4r1s0n.github.io/Random-Quote-Machine' target="_blank"><img
            className="d-block w-100"
            src={QuoteMachine}
            alt="First slide"
          /></a>
          
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Random Quote Generator</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {btstrpLogo}Bootstrap, {jQLogo}jQuery, {jSLogo}JavaScript</h4>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://k4r1s0n.github.io/markdown-previewer' target="_blank">
            <img
            className="d-block w-100"
            src={MarkdownPreviewer}
            alt="Second slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Markdown Previewer</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {btstrpLogo}Bootstrap, {reactLogo}React, {jSLogo}JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://k4r1s0n.github.io/React-Calculator' target="_blank">
            <img
            className="d-block w-100"
            src={Calculatop}
            alt="Third slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>JavaScript Calculatop</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {reactLogo}React, {jSLogo}JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://k4r1s0n.github.io/Drum-Machine' target="_blank">
            <img
            className="d-block w-100"
            src={DrumMachine}
            alt="Fourth slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Drum Machine</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {btstrpLogo}Bootstrap, {reactLogo}React, {jSLogo}JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href='https://k4r1s0n.github.io/Pomodoro-Clock' target="_blank">
            <img
            className="d-block w-100"
            src={PomodoroClock}
            alt="Fifth slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Pomodoro Clock</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {btstrpLogo}Bootstrap, {jQLogo}jQuery, {jSLogo}JavaScript</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://k4r1s0n.github.io/weather-app/" target="_blank">
            <img
            className="d-block w-100"
            src={WeatherApp}
            alt="Sixth slide"
          />
          </a>
          <Carousel.Caption>
            <div className="project-dscrptn container">
              <h3>Weather App</h3>
              <h4>Technologies: {htmlLogo}HTML5, {cssLogo}CSS3, {btstrpLogo}Bootstrap, {reactLogo}React, {jSLogo}JavaScript</h4>
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
      <div id="projects" className="text-center container">
        <Spring
          config={{ duration: 1000 }}
          from={{opacity:0, marginTop: -1000}}
          to={{opacity:1, marginTop: 130}}>
          {props => (
            <div style={props}>
              <div id="slider">
                <ControlledCarousel/>
              </div>
            </div>
          )}
        </Spring>
      </div>
    )
  }
}
