import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ["#7BC950", "#7CE577", "#9CFFD9", "#B6EFD4", "#A0CCDA"]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
