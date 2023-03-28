import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as CreateStore,
} from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import { getFavoriteDataReducer } from "../reducers/getFavoriteData";
import { getPollutionReducer } from "../reducers/getPollutionData";
import { getStationDataReducer } from "../reducers/getStationData";

const persistConfig = {
  key: "root",
  storage: storage,
  favorite: ["getFavoriteDataReducer"],
};

const rootReducer = combineReducers({
  getPollutionReducer,
  getStationDataReducer,
  getFavoriteDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = CreateStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
