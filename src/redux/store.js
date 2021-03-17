import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
//persist
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers
import userReducer from "./auth/user.reducer";
import universalModalreduce from "./universalModal/universalModal.reducer";
import calendar from "./calendar/calendarReducer";
// import LogautUserRerucer from './auth/logaut.action.js';
// import dateReducer from "./reducers/date.reducer";
import dbReducer from "./db/db.reducer";

//middlewares
import seMiddleware from "./middlewares/se.middleware";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["email", "jwt"],
};

const reducers = {
  user: persistReducer(persistConfig, userReducer),
  universalModal: universalModalreduce,
  calendar: calendar,
  db: dbReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: [seMiddleware, thunk],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

const persistor = persistStore(store);

export { store, persistor };
