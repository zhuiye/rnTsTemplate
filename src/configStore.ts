import { Store, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

// import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, createRootReducer } from "./store";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, createRootReducer());

export default function configureStore() {
  const store = createStore(persistedReducer);

  const persistor = persistStore(store);
  return { store, persistor };
}
