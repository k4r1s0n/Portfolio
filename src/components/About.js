/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops';
import { Animate } from "react-move";
import {
  easeSinOut,
  easeQuadIn,
  easeQuadInOut,
  easeLinear,
  easeCubicInOut
} from "d3-ease";
import CircularProgressbar from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import {jQLogo} from './Projects';

const progressbarsStyle = {width: 150, height: 150, marginLeft: "auto",  marginRight: "auto"};
class AnimatedProgressbar extends Component {
  state = {
    isAnimated: false
  };

  componentDidMount() {
    this.setState({
      isAnimated: true
    });
  }

  render() {
    return (
      <Animate
        start={() => ({
          percentage: 0
        })}
        update={() => ({
          percentage: [this.state.isAnimated ? this.props.percentage : 0],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ percentage }) => {
          const roundedPercentage = Math.round(percentage);
          return (
            <CircularProgressbar
              percentage={roundedPercentage}
              text={`${roundedPercentage}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: "#000000"
                },
                text: {
                  fill: "#fff"
                },
                path: {
                  stroke: "#ff9100",
                  strokeLinecap: 'round'
                },
                trail: { stroke: "transparent" }
              }}
            />
          );
        }}
      </Animate>
    );
  }
  abstract;
}

export default class About extends Component {
  render() {
    return (
      <Spring
        from={{opacity:0}}
        to={{opacity:1}}>
        {props => (
          <div style={props}>
            <div id="about" className="container-fluid text-center" >
              <div className="about-block">
                <h2 className="about-title">KEY SKILLS</h2>
                <div id="progressbars" className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4><i class="fab fa-html5"></i> HTML</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={70}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4><i class="fab fa-css3-alt"></i> CSS</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={70}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4><i class="fab fa-js-square"></i> JavaScript</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={65}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4 className="jq-logo">{jQLogo} jQuery</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={50}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4><i class="fab fa-bootstrap"></i> Bootstrap</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={57}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 progress-item">
                    <h4><i class="fab fa-react"></i> React</h4>
                    <div style={progressbarsStyle}>
                      <AnimatedProgressbar
                      percentage={50}
                      duration={1.2}
                      easingFunction={easeSinOut}
                      />
                    </div>
                  </div>
                </div>
              </div>


              <div className="about-block">
                <h2 className="about-title">ABOUT ME</h2>
                <p>I am a front end developer currently living in Vancouver, Canada. With solid experience in front-end technologies, always focusing on quality, performance and semantic. My passion is being challenged and engaging with projects that require me to work outside my comfort and knowledge set. I keep learning new languages and development techniques.</p>
              </div>
              
              
              <div className="about-block">
                <h2 className="about-title text-center">AREAS OF KNOWLEDGE</h2>
                  <div className="row justify-content-center">
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">JavaScript</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">CSS3</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">DOM</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">XML/JSON</div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Bash</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Node.js</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Regex</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Git</div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">OOP</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">HTML5</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">XML/JSON</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Markdown</div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">ReactJS</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">jQuery</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">SASS</div>
                    <div className="menu-item col-sm-4 col-md-4 col-lg-2">Bootstrap</div>
                  </div>
              </div>
            </div>     
          </div>
        )}
      </Spring>
    )
  }
}
