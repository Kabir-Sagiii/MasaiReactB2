import "./Counter.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Counter(props) {
  const [state, setState] = useState(0);
  const [searchparam, setSearchParam] = useSearchParams();
  //creating the state variable
  console.log(searchparam.get("gender"));

  // console.log("Counter Comp is Called");

  const updateCount = () => {
    // console.log(state); // 0   1

    setSearchParam({
      filter: "electronic",
    });

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
