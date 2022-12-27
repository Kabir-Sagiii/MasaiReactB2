import { useState, useEffect } from "react";
import Header from "./Component/Header.js";
import Profile from "./Component/State_API/Profile";
import Counter from "./Component/Counter/Counter";
import Products from "./Component/Products/Product";
import Pagenotfound from "./Component/Pageoutfound/Pagenotfound";
import Auth from "./Component/Auth.js";
import Electronic from "./Component/Products/Electronic";
import Jewelery from "./Component/Products/Jewelery";
import { Routes, Route, Navigate } from "react-router-dom";
import { loginContext } from "./Component/Context/context";
import Home from "./Component/Home/Home.js";
import Nav from "./Component/State_API/Nav";
import Todo from "./Component/Todo/Todo";
import ProductDetails from "./Component/Products/ProductDetails.jsx";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.js";

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  useEffect(() => {
    console.log(window.location.href);
    var data = localStorage.getItem("isLoggedIn");
    setState({
      ...state,
      isLoggedIn: data,
    });
  }, []);

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };

  return (
    <div>
      <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
        <Header />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          >
            <Route path="" element={<Navigate to="electronic" />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="jewelery" element={<Jewelery />} />
          </Route>
          <Route
            path="/todo"
            element={state.isLoggedIn ? <Todo /> : <Navigate to="/" />}
          />
          <Route
            path="/counter"
            element={
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            }
          />
          <Route
            path="/productdetails/:id"
            element={
              state.isLoggedIn ? <ProductDetails /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </loginContext.Provider>
      {/* <Nav /> */}
    </div>
  );
}

export default App;
