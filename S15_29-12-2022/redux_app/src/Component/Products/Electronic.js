import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import electronicAction from "./Redux_Pipeline/electronicAction";
import { useDispatch, useSelector } from "react-redux";

function Electronic(props) {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const electronicData = useSelector((storeData) => {
    return storeData.products.electronic;
  });

  useEffect(() => {
    if (electronicData.length === 0) {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((data) => {
          electronicAction(data, dispatch);
          setState(data);
        });
    } else {
      setState(electronicData);
    }
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
              <NavLink
                to={`/productdetails/${ele.id}`}
                style={{ color: "blue" }}
              >
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
