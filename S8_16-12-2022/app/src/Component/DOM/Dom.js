import { useRef } from "react";

function Dom(props) {
  const h2Ref = useRef(null); // {current:null}
  const btnRef = useRef(null);

  const changeStyle = () => {
    h2Ref.current.style.color = "green";
    btnRef.current.innerText = "Style Modified";

    // h2Ref.current = document.getElementById("")
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 ref={h2Ref} id="h2">
        React useRef() Concept
      </h2>
      <button ref={btnRef} onClick={changeStyle}>
        Change Style
      </button>
    </div>
  );
}

export default Dom;
