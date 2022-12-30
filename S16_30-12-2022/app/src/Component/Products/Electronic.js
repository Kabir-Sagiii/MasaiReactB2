import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import electronicAction from "./Redux_Pipeline/electronicAction";
import { useDispatch, useSelector } from "react-redux";
import reduxThunkActionCreator from "./Redux_Pipeline/electronicThunkAction";

function Electronic(props) {
  const [data, setState] = useState([]);
  const dispatch = useDispatch();

  const electronicData = useSelector((storeData) => {
    return storeData.products.electronic;
  });

  useEffect(() => {
    // electronicAction(electronicData, dispatch);

    // dispatch(electronicThunkAction);

    dispatch(
      reduxThunkActionCreator(
        "https://fakestoreapi.com/products/category/electronics"
      )
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        {electronicData.length > 0 &&
          electronicData[0].category.toUpperCase() + " CATEGORY"}
      </h2>
      <ul>
        {electronicData.length > 0 ? (
          electronicData.map((ele, index) => {
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
