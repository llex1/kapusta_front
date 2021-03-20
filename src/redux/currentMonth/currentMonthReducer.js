import { createReducer } from "@reduxjs/toolkit";
import currentMonthAction from "./currentMonthAction";
import moment from "moment";

const currentMonthReducer = createReducer(moment().format("MMMM"), {
  [currentMonthAction.currentMonth]: (state, action) => action.payload,
});

export default currentMonthReducer;
