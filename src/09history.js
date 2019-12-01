import React, { Component } from "react";

class History extends Component {
  GoBack = () => {
    this.props.history.goBack();
  };
  GoHome = () => {
    this.props.history.push("/");
  };
  //   componentMount = () => {
  //     this.unblock = this.props.history.block("Do you really wanna leave?");
  //   };
  //   componentUnmount = () => {
  //     if (this.unblock) {
  //       this.unblock();
  //     }
  //   };
  //   안됨. 왜 안되는지 모르겠음.

  render() {
    return (
      <div>
        <button onClick={this.GoBack}>Go Back</button>
        <button onClick={this.GoHome}>Go Home</button>
      </div>
    );
  }
}

export default History;
