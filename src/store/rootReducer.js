import { combineReducers } from "redux";

// import category from "./category/reducers";
// import user from "./user/reducers";
import productReducer from "./product/reducer";
// import dashboard from "./car/reducers";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
