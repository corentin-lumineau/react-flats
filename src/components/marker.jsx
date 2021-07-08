import React, { Component } from "react";

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="marker" />
    );
  }
}

export default Marker;
