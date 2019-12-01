import React, { useState } from "react";

const Say = () => {
  const [M, setM] = useState("");
  const onClickEnter = () => setM("hello");
  const onClickLeave = () => setM("byebye");

  const [C, setC] = useState("gray");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <div style={{ color: C }}>{M}</div>
      <button style={{ color: "red" }} onClick={() => setC("red")}>
        RED
      </button>
      <button style={{ color: "green" }} onClick={() => setC("green")}>
        GREEN
      </button>
      <button style={{ color: "blue" }} onClick={() => setC("blue")}>
        BLUE
      </button>
    </div>
  );
};

export default Say;
