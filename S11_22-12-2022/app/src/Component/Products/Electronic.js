import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Electronic(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        {state.length > 0 && state[0].category.toUpperCase() + " CATEGORY"}
      </h2>
      <ul>
        {state.length > 0 ? (
          state.map((ele, index) => {
            return (
              <NavLink to="/productdetails" style={{ color: "blue" }}>
                {" "}
                <li style={{ marginTop: "10px" }} key={index + 1}>
                  {" "}
                  {ele.title}
                </li>
              </NavLink>
            );
          })
        ) : (
          <div
            style={{ textAlign: "center", color: "red", marginTop: "100px" }}
          >
            ..... Loading .....
          </div>
        )}
      </ul>
    </div>
  );
}

export default Electronic;
