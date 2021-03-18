import { createAction } from "@reduxjs/toolkit";

const fetchSummeryRequest = createAction("Summery/fetchRequest");
const fetchSummerySuccess = createAction("Summery/fetchSuccess");
const fetchSummeryError = createAction("Summery/fetchError");

export default {
  fetchSummeryRequest,
  fetchSummerySuccess,
  fetchSummeryError,
};
