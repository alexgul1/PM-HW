import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import info from '../ducks/info';
import education from "../ducks/education";
import experience from "../ducks/experience";

const rootReducer = combineReducers({
  info,
  education,
  experience
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
