import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import dbActions from "./db.action";

const costsReducer = createReducer(initState.db, {
  [dbActions.addCostSuccess]: (state, { payload }) => {
    return { ...state, costs: [...state.costs, ...payload] };
  },
  [dbActions.deleteCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: state.costs.filter(({ _id }) => _id !== payload.id),
    };
  },
});

export default costsReducer;
