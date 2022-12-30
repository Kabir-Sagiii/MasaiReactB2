import { useContext } from "react";
import { loginContext } from "../Context/context";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const { state } = useContext(loginContext);
  if (state.isLoggedIn) {
    return props.children;
  }
  return <Navigate to="/" />;
}

export default PrivateRoute;
