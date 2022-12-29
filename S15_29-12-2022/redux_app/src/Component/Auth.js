import { useContext } from "react";
import Login from "./Login";
// import Home from "./Home";
import Home from "./Home/Home";
import { loginContext } from "./Context/context";

function Auth(props) {
  const { state } = useContext(loginContext);
  // let isLoggedIn = false;
  return <div>{state.isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Auth;
