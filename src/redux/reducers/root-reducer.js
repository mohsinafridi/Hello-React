import { combineReducers } from "redux";

import counterReducer from "./counter-reducer";
import cakeReducer from "./cake.reducer";

const AllReducers = combineReducers({
  counter: counterReducer,
  cake:cakeReducer  
});
export default AllReducers;
