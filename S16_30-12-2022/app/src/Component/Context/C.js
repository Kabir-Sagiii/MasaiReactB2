import React from "react";
import D from "./D";

function C(props) {
  console.log("C");
  return (
    <div>
      <h2>C Component</h2>

      <D />
    </div>
  );
}

export default C;
