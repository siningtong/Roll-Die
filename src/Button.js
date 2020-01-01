import React, { Component } from "react";

import "./App.css";

class Button extends Component {
  render() {
    console.log(this.props);
    return <button onClick={this.props.roll}>Roll Die!</button>;
  }
}

export default Button;
