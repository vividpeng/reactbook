import React from "react";

const Iteration = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ol>{nameList}</ol>
    </div>
  );
};

export default Iteration;
