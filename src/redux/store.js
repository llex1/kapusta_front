import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//reducers
import userReducer from "./auth/user.reducer";
// import dateReducer from "./reducers/date.reducer";
// import dbReducer from "./reducers/db.reducer";

//middlewares
import seMiddleware from "./middlewares/se.middleware";

// costs
import costsReducer from "./costs/costsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // date: dateReducer,
  // db: dbReducer,
  costs: costsReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(seMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
