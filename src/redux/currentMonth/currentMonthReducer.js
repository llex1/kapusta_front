import { createReducer } from "@reduxjs/toolkit";
import currentMonthAction from "./currentMonthAction";

const initialState = new Date().getFullYear() * 12 + new Date().getMonth() + 1;

const currentMonthReducer = createReducer(initialState, {
  [currentMonthAction.currentMonth]: (state, action) => action.payload,
});

export default currentMonthReducer;
