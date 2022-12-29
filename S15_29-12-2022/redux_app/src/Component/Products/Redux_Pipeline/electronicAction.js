const electronicAction = (electronicData, dispatch) => {
  dispatch({
    type: "ELECTRONIC",
    data: electronicData,
  });
};

export default electronicAction;
