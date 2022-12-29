const jeweleryAction = (jeweleryData, dispatch) => {
  dispatch({
    type: "JEWELERY",
    payload: jeweleryData,
  });
};

export default jeweleryAction;
