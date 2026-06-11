import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// basit bir initial state
const initialState = {
  
};

// basit reducer (şimdilik boş)
const rootReducer = (state = initialState, action) => {
  return state;
};

// store oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;