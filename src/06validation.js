import React, { Component } from "react";
import "./06validation.css";

class Validation extends Component {
  state = {
    passwor: "",
    clic: false,
    vali: false
  };
  handleChange = a => {
    this.setState({
      passwor: a.target.value
    });
  };

  handleClick = () => {
    this.setState({
      clic: true,
      vali: this.state.passwor === "1234"
    });
  };

  render() {
    return (
      <div>
        <h1>Validation practice</h1>
        <input
          type="password"
          value={this.state.passwor}
          onChange={this.handleChange}
          className={this.state.clic ? (this.state.vali ? "succ" : "fail") : ""}
        />
        <button onClick={this.handleClick}>ckeck it out</button>
      </div>
    );
  }
}

export default Validation;
