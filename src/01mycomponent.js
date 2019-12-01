import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, childr, children } = this.props;
    return (
      <div>
        안녕하세요, 제이름은 {name}입니다.{childr}
        <br></br>
        {children}
      </div>
    );
  }
}

// const MyComponent = props => {
//   return (
//     <div>
//       안녕하세요, 제이름은 {props.name}입니다.{props.childr}
//     </div>
//   );
// };
MyComponent.defaultProps = {
  name: "null"
};
MyComponent.propTypes = {
  name: PropTypes.string
};
export default MyComponent;
