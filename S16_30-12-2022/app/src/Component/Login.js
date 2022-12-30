import { useState, useContext } from "react";
import { loginContext } from "./Context/context";

var loginStyle = {
  width: "300px",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "50px auto",
};
function Login(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const { fnLoggedIn } = useContext(loginContext);

  const handleForm = (event) => {
    event.preventDefault();
    if (
      state.name === process.env.REACT_APP_USERNAME &&
      state.password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", true);
      // alert("Logged In");
      fnLoggedIn({
        isLoggedIn: true,
        user: "Kabir",
      });
    } else {
      alert("Please Check the Credentials");
    }
  };

  return (
    <div style={loginStyle}>
      <div>
        <h2>Login form</h2>
        <form onSubmit={handleForm}>
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setState({
                  ...state,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setState({
                  ...state,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
