import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import persistReducers from "./persistReducers";
import thunk from "redux-thunk";

import rootReducer from "./modules/rootReducer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  persistReducers(rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
