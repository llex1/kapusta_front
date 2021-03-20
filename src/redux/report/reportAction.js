import { createAction } from "@reduxjs/toolkit";

const reportRequest = createAction("report/reportRequest");
const reportSuccess = createAction("report/reportSuccess");
const reportError = createAction("report/reportError");

export default {
  reportRequest,
  reportSuccess,
  reportError,
};
