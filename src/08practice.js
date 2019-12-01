import React from "react";
import MyComponent from "./01mycomponent";
import Counter from "./02counter";
import Say from "./03say";
import Event from "./04event";
import Event2 from "./05event2";
import Validation from "./06validation";
import Iteration from "./07iteration";

const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <MyComponent childr="hoho">hehe</MyComponent>
      <Counter></Counter>
      <Say></Say>
      <Event></Event>
      <Event2></Event2>
      <Validation></Validation>
      <Iteration></Iteration>
    </div>
  );
};

export default Practice;
