import { incCountAction, decCountAction } from "./Redux/action.js";
import myStore from "./Redux/Store.js";
function incCount(data) {
  incCountAction(data);
  console.log(myStore.getState());
  console.log("---------------------------------------");
}

function decCount(data) {
  decCountAction(data);
  console.log(myStore.getState());
  console.log("---------------------------------------");
}

console.log(myStore.getState());
console.log("---------------------------------------");

incCount(5);
incCount(10);
decCount(1);

// decCount(3);
