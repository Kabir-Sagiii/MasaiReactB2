// import reduxstore from "./Store";

export const nameAction = (name, dispatch) => {
  // reduxstore.dispatch({
  //   type: "NAME",
  //   username: name,
  // });

  dispatch({
    type: "NAME",
    username: name,
  });
};
