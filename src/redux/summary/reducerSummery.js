import { createReducer } from "@reduxjs/toolkit";
import actionSummary from "./actionSummary";

const summary = createReducer(
  {},
  {
    [actionSummary.fetchSummerySuccess]: (state, action) => action.payload,
  }
);

export default summary;
