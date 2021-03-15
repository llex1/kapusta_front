import { v4 as uuidv4 } from "uuid";
import actionTypes from "./costsTypes";

const addCost = (date, describe, category, sum) => ({
  type: actionTypes.ADD,
  payload: {
    cost: {
      id: uuidv4(),
      date,
      category,
      describe,
      sum,
    },
  },
});

const removeCost = (costId) => ({
  type: actionTypes.REMOVE,
  payload: {
    costId,
  },
});

export default {
  addCost,
  removeCost,
};
