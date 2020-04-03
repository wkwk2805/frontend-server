import { combineReducers } from "redux";
import loading from "./loading";
import size from "./size";

const rootReducer = combineReducers({
  loading,
  size
});

export default rootReducer;
