import { useContext, useEffect } from "react";
import { loginContext } from "../Context/context";
import { useNavigate, Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { state } = useContext(loginContext);
  console.log(state);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!state.isLoggedIn) {
  //       navigate("/");
  //     }
  //   });

  return <> {state.isLoggedIn ? props.children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
