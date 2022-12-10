import "./Counter.css";
import { useState } from "react";

function Counter(props) {
  //creating the state variable
  let [state, setState] = useState(0);

  console.log("Counter Comp is Called");

  const updateCount = () => {
    // console.log(state); // 0   1

    setState((prevState) => prevState + 1);

    setState((prevState) => prevState + 1);

    setState((prevState) => prevState + 1);

    // console.log(state); // 1   2
  };

  return (
    <div className="counter">
      <h2>Count Value is {state}</h2>
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
}

export default Counter;
