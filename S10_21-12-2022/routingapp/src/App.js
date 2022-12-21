import Nav from "./Components/State_API/Nav";
import Home from "./Components/Home/Home";
import Profile from "./Components/State_API/Profile";
import Todo from "./Components/Todo/Todo";
import Counter from "./Components/Counter/Counter";
import { Route, Routes, Navigate } from "react-router-dom";
import Pagenotfound from "./Components/Pageoutfound/Pagenotfound";
import Product from "./Components/Products/Product";
import Electronic from "./Components/Products/Electronic";
import Jewelery from "./Components/Products/Jewelery";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/products" element={<Product />}>
          <Route path="" element={<Navigate to="jewelery" />} />
          <Route path="electronic" element={<Electronic />} />
          <Route path="jewelery" element={<Jewelery />} />
        </Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
