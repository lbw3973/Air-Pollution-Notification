import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as CreateStore,
} from "redux";
import ReduxThunk from "redux-thunk";
import { getStationReducer } from "../reducers/GetStationInfo";

const rootReducer = getStationReducer;

export const store = CreateStore(rootReducer, applyMiddleware(ReduxThunk));
