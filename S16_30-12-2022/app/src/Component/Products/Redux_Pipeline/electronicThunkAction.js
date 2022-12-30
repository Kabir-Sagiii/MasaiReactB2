// export default function electronicThunkAction(dispatch, getState) {
//   if (getState().products.electronic.length === 0) {
//     fetch("https://fakestoreapi.com/products/category/electronics")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         dispatch({
//           type: "ELECTRONIC",
//           data,
//         });
//       });
//   }
// }

export default function reduxThunkActionCreator(url) {
  return function reduxThunkAction(dispatch, getState) {
    if (getState().products.electronic.length === 0) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch({
            type: "ELECTRONIC",
            data,
          });
        });
    }
  };
}
