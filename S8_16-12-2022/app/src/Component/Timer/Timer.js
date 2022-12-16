import { useState, useRef } from "react";
import Styles from "./Timer.module.css";

function Timer(props) {
  const [timer, setTimer] = useState(0);
  const ref1 = useRef();

  let interval;

  console.log(interval); // undefined // undefined
  const startTimer = () => {
    ref1.current = setInterval(() => {
      console.log("Inside setInterval", interval); //1
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref1.current); //undefined
  };
  return (
    <div className={Styles.timerContainer}>
      <h2>Timer is {timer}</h2>
      <button onClick={startTimer}>Start</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
