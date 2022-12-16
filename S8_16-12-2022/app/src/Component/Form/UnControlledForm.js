import { useRef } from "react";

function Form(props) {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  var formStyle = {
    width: "300px",
    padding: "20px",
    margin: "50px auto",
    boxShadow: "0 0 10px black",
    textAlign: "center",
  };

  const submitData = () => {
    console.log(
      nameRef.current.value,
      passwordRef.current.value,
      document.getElementById("email").value
    );
  };
  return (
    <div style={formStyle}>
      <h2>Uncontrolled Component</h2>
      <form>
        <div>
          <input type="text" placeholder="Enter Name" ref={nameRef} />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
          />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Enter Email" id="email" />
        </div>
        <br />
        <div>
          <input type="button" value="Register" onClick={submitData} />
        </div>
      </form>
    </div>
  );
}

export default Form;
