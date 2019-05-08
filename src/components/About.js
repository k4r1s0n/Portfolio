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

const progressbarsStyle = {width: "100%", height: "100%", padding: "15%"};
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
            <div id="about" className="container-fluid" >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="about-title text-center">ABOUT ME</h2>
                  <p>I am a web developer currently living in Vancouver, Canada. With solid experience in front-end technologies, always focusing on quality, performance and semantic. My passion is being challenged and engaging with projects that require me to work outside my comfort and knowledge set. I keep learning new languages and development techniques.</p>
                  <h2 className="about-title text-center">KEY SKILLS</h2>
                </div>
              </div>
              <div id="progressbars" className="row">
                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
                  <h4><i class="fab fa-html5"></i> HTML</h4>
                  <div style={progressbarsStyle}>
                    <AnimatedProgressbar
                    percentage={70}
                    duration={1.2}
                    easingFunction={easeSinOut}
                    />
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
                  <h4><i class="fab fa-css3-alt"></i> CSS</h4>
                  <div style={progressbarsStyle}>
                    <AnimatedProgressbar
                    percentage={70}
                    duration={1.2}
                    easingFunction={easeSinOut}
                    />
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
                  <h4><i class="fab fa-js-square"></i> JavaScript</h4>
                  <div style={progressbarsStyle}>
                    <AnimatedProgressbar
                    percentage={65}
                    duration={1.2}
                    easingFunction={easeSinOut}
                    />
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
                  <h4><i class="fas fa-check-square"></i> jQuery</h4>
                  <div style={progressbarsStyle}>
                    <AnimatedProgressbar
                    percentage={50}
                    duration={1.2}
                    easingFunction={easeSinOut}
                    />
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
                  <h4><i class="fab fa-bootstrap"></i> Bootstrap</h4>
                  <div style={progressbarsStyle}>
                    <AnimatedProgressbar
                    percentage={57}
                    duration={1.2}
                    easingFunction={easeSinOut}
                    />
                  </div>
                </div>

                <div className="col-sm-2 col-md-2 col-lg-1 text-center">
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
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="about-title text-center">AREAS OF KNOWLEDGE</h2>
                </div>
              </div>
              
              <Spring
                from={{opacity:0, marginLeft: -50}}
                to={{opacity:1, marginLeft: 40}}>
                {props => (
                  <div style={props}>
                    <div className="container-fluid row"> 
                      <div className="text-center col-lg-6">
                        <div className="row">
                          <div className="menu-item col-sm-1">JavaScript ES6</div>
                          <div className="menu-item col-sm-1">CSS3</div>
                          <div className="menu-item col-sm-1">DOM</div>
                          <div className="menu-item col-sm-1">XML/JSON</div>
                        </div>
                        <div className="row">
                          <div className="menu-item col-sm-1">Bash</div>
                          <div className="menu-item col-sm-1">Node.js</div>
                          <div className="menu-item col-sm-1">Regex</div>
                          <div className="menu-item col-sm-1">Git</div>
                        </div>
                        <div className="row">
                          <div className="menu-item col-sm-1">OOP</div>
                          <div className="menu-item col-sm-1">HTML5</div>
                          <div className="menu-item col-sm-1">XML/JSON</div>
                          <div className="menu-item col-sm-1">Markdown</div>
                        </div>
                        <div className="row">
                          <div className="menu-item col-sm-1">ReactJS</div>
                          <div className="menu-item col-sm-1">jQuery</div>
                          <div className="menu-item col-sm-1">SASS</div>
                          <div className="menu-item col-sm-1">Bootstrap</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Spring>
               
              
            </div>     
           
              
          </div>
        )}
      </Spring>
    )
  }
}
