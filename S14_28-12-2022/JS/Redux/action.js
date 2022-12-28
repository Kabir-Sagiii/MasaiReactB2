import myStore from "./Store.js";

export const incCountAction = (data) => {
  myStore.dispatch({
    type: "ADD",
    payload: data,
  });
};

export const decCountAction = (data) => {
  myStore.dispatch({
    type: "SUB",
    payload: data,
  });
};
