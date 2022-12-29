import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A(props) {
  console.log("A");
  const [state, setState] = useState({
    name: "Chris",
    city: "Sydney",
    email: "Chris@gmail.com",
  });
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState({
            name: "Raj",
            city: "Delhi",
            email: "Raj@gmail.com",
          });
        }}
      >
        Update Data
      </button>
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
