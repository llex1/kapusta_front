import { createAction } from "@reduxjs/toolkit";

const addCostRequest = createAction("costs/addCostRequest");
const addCostSuccess = createAction("costs/addCostSuccess");
const addCostError = createAction("costs/addCostError");

const deleteCostRequest = createAction("costs/deleteCostRequest");
const deleteCostSuccess = createAction("costs/deleteCostSuccess");
const deleteCostError = createAction("costs/deleteCostError");

const getCostByDateRequest = createAction("costs/getCostByDateRequest");
const getCostByDateSuccess = createAction("costs/getCostByDateSuccess");
const getCostByDateError = createAction("costs/getCostByDateError");

export default {
  addCostRequest,
  addCostSuccess,
  addCostError,
  deleteCostRequest,
  deleteCostSuccess,
  deleteCostError,
  getCostByDateRequest,
  getCostByDateSuccess,
  getCostByDateError,
};
