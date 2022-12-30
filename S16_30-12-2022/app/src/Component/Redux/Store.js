import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import nameReducer from "./nameReducer";
import productsReducer from "../Products/Redux_Pipeline/productReducer";
import dummyReducer from "./DummyReducer";
import logger from "redux-logger";

import thunk from "redux-thunk";

const combinedReducers = combineReducers({
  name: nameReducer,
  products: productsReducer,
  dummy: dummyReducer,
});

const reduxstore = legacy_createStore(
  combinedReducers,
  applyMiddleware(logger, thunk)
);

// reduxstore.subscribe(() => {
//   console.log("Store Updated");
//   console.log(reduxstore.getState());
// });

export default reduxstore;
