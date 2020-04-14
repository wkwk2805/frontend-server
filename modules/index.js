import { combineReducers } from "redux";
import loading from "./loading";
import size from "./size";
import instance from "./instance";
import user from "./user";

const rootReducer = combineReducers({
  loading,
  size,
  instance,
  user,
});

export default rootReducer;
