import React, { Component } from "react";

class Event2 extends Component {
  state = {
    user: "",
    message: ""
  };

  handleChange = a => {
    this.setState({
      [a.target.name]: a.target.value
    });
  };

  handleClick = () => {
    alert(this.state.user + " is " + this.state.message);
    this.setState({
      user: "",
      message: ""
    });
  };

  handleEnter = a => {
    if (a.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Event Practice2</h1>
        <input
          type="text"
          name="user"
          placeholder="username"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="anything you want2"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        <button onClick={this.handleClick}>check2</button>
      </div>
    );
  }
}

export default Event2;
