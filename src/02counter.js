import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0
  //     };
  //   }
  state = {
    number: 0
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            //함수가 끝나야 반영되기 때문에, 여러개를 만들면 연달아 반영 못함.
            this.setState(prevS => ({
              number: prevS.number + 1
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
