//action we required 3 things :
//1) storedata
//2) dispatch
//3) Some times Parameters (Optional)

const electronicAction = (electronicData, dispatch) => {
  if (electronicData.length === 0) {
    fetch("https://fakestoreapi.com/products/category/electronics")
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

export default electronicAction;
