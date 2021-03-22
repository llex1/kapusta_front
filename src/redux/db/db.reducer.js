import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import dbActions from "./db.action";

const dbReducer = createReducer(initState.db, {
  [dbActions.addCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: [...state.costs, ...[payload.costs]],
      balance: payload.balance,
    };
  },
  [dbActions.deleteCostSuccess]: (state, { payload }) => {
    return {
      ...state,
      costs: state.costs.filter(({ _id }) => _id !== payload.id),
      balance: payload.balance,
    };
  },
  [dbActions.getCostByDateSuccess]: (state, { payload }) => {
    return { ...state, costs: payload.data };
  },
  [dbActions.addProfitSuccess]: (state, { payload }) => {
    return {
      ...state,
      profits: [...state.profits, ...[payload.profits]],
      balance: payload.balance,
    };
  },
  [dbActions.deleteProfitSuccess]: (state, { payload }) => {
    return {
      ...state,
      profits: state.profits.filter(({ _id }) => _id !== payload.id),
      balance: payload.balance,
    };
  },
  [dbActions.getProfitByDateSuccess]: (state, { payload }) => {
    return { ...state, profits: payload.data };
  },
  [dbActions.addBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: +payload };
  },
  [dbActions.getBalanceSuccess]: (state, { payload }) => {
    return { ...state, balance: +payload };
  },
});

export default dbReducer;
