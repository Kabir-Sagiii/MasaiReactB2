var defaultData = {
  count: 0,
  todo: ["Sagar", "Kabir", "Masai"],
};

const myReducer = (state = defaultData, action) => {
  if (action.type === "ADD") {
    state = {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "SUB") {
    state = {
      ...state,
      count: state.count - action.payload,
    };
  }
  return state;
};

export default myReducer;
