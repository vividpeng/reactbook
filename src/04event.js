import React, { Component } from "react";

class Event extends Component {
  state = {
    message: ""
  };
  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input
          type="text"
          name="message"
          placeholder="anything you want"
          value={this.state.message}
          onChange={a => {
            // console.log(a.target.value);
            this.setState({
              message: a.target.value
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ""
            });
          }}
        >
          check
        </button>
      </div>
    );
  }
}

export default Event;
