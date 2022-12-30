let initialData = {
  electronic: [],
  jewelery: [],
  mens: [],
  womens: [],
};

const productsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ELECTRONIC":
      state = {
        ...state,
        electronic: action.data,
      };
      break;

    case "JEWELERY":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
  }
  return state;
};

export default productsReducer;
