import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import dbActions from "./db.action";

const dbReducer = createReducer(initState.db, {
  [dbActions.addCostSuccess]: (state, { payload }) => {
    return { ...state, costs: [...state.costs, ...payload] };
  },
  [dbActions.deleteCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: state.costs.filter(({ _id }) => _id !== payload.id),
    };
  },
  [dbActions.getCostByDateSuccess]: (state, { payload }) => {
    return { ...state, costs: payload.data };
  },
  [dbActions.addProfitSuccess]: (state, { payload }) => {
    return { ...state, profits: [...state.profits, ...payload] };
  },
  [dbActions.deleteProfitSuccess]: (state, { payload }) => {
    return {
      ...state,
      profits: state.profits.filter(({ _id }) => _id !== payload.id),
    };
  },
  [dbActions.getProfitByDateSuccess]: (state, { payload }) => {
    return { ...state, profits: payload.data };
  },
});

export default dbReducer;
