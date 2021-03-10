import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import photoDetails from "../ducks/photoDetails";
import previewsList from "../ducks/previewsList";
import user from "../ducks/user";

const rootReducer = combineReducers({
  photoDetails,
  previewsList,
  user
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
