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
                  fill: "#3e98c7"
                },
                text: {
                  fill: "#fff"
                },
                path: {
                  stroke: "#fff",
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
            <div id="about" className="row">
              <div className="col-md-6">
                <h1>About Me</h1>
                <p>I am a web developer currently living in Vancouver, Canada. With solid experience in front-end technologies, always focusing on quality, performance and semantic. My passion is being challenged and engaging with projects that require me to work outside my comfort and knowledge set. I keep learning new languages and development techniques.</p>
                <div
                  style={{
                    width: "100px",
                    height: "100px"
                  }}>
                  <AnimatedProgressbar
                    percentage={66}
                    duration={1.4}
                    /* Can swap this out with other easing functions from d3-ease */
                    easingFunction={easeQuadInOut}
                  />
                </div>
              </div>
             
            </div>
          </div>
        )}
      </Spring>
    )
  }
}
