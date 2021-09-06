import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import countriesReducer from "./countries/countries";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({ countries: countriesReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
