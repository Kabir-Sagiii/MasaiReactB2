import { useState } from "react";
import Header from "./Component/Header.js";
import A from "./Component/Context/A.js";
import Auth from "./Component/Auth.js";
import { loginContext } from "./Component/Context/context";
function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

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
        <Auth />
      </loginContext.Provider>
      {/* <Login />
      <Home /> */}
      {/* <div style={{ padding: "50px 100px" }}>
        <A />
      </div> */}
    </div>
  );
}

export default App;
