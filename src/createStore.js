import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./reducers";

export const middleware = [thunk];
export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export const store = createStoreWithMiddleware(RootReducer);