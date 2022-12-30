let initialdata = "Dummy Data";

const nameReducer = (state = initialdata, action) => {
  if (action.type === "NAME") {
    state = action.username;
  }
  return state;
};

export default nameReducer;
