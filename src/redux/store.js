import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import userReducer from './auth/user.reducer';
import universalModalreduce from './universalModal/universalModal.reducer';
import LogautUserRerucer from './auth/logaut.reducer.js';
// import dateReducer from "./reducers/date.reducer";
// import dbReducer from "./reducers/db.reducer";

//middlewares
import seMiddleware from './middlewares/se.middleware';

const rootReducer = combineReducers({
  user: userReducer,LogautUserRerucer,
  universalModal: universalModalreduce,
  // date: dateReducer,
  // db: dbReducer,
});

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(seMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const persistor = persistStore(store);

export { store, persistor };
