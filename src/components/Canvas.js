import React, { Component } from "react";
import { range } from "lodash";

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotInterval: 10
    };
  }

  handleScroll = e => {
    const { dotInterval } = this.state;
    const zoom = dotInterval + e.deltaY;

    if (zoom >= 10) {
      this.setState({
        dotInterval: zoom
      });
    }
  };

  render() {
    let { dotInterval } = this.state;
    const canvasSize = 500;
    const dots = range(canvasSize / dotInterval).map(i => {
      return range(canvasSize / dotInterval).map(j => {
        return (
          <circle
            key={i + "," + j}
            cx={i * dotInterval}
            cy={j * dotInterval}
            r={2}
            fill="#000000aa"
          />
        );
      });
    });

    return (
      <div>
        <svg
          height={canvasSize}
          width={canvasSize}
          className="canvas"
          onWheel={this.handleScroll}
        >
          <g>{dots}</g>
          <rect
            width="300"
            height="100"
            fill="#ff000055"
            transform={`scale(${dotInterval / 10})`}
          />
        </svg>
      </div>
    );
  }
}
