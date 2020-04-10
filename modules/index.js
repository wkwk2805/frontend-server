import { combineReducers } from "redux";
import loading from "./loading";
import size from "./size";
import instance from "./instance";

const rootReducer = combineReducers({
  loading,
  size,
  instance,
});

export default rootReducer;
