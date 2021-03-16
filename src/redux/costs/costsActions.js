import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import actionTypes from "./costsTypes";
import costReducer from "./costsReducer";
import initState from "../initState";

export default function CostsActions() {
  const [costs, dispatch] = useReducer(costReducer, []);
  const addCost = (date, describe, category, sum) => {
    const cost = {
      id: uuidv4(),
      date: date,
      category: category,
      describe: describe,
      sum: sum,
    };
    dispatch({ type: actionTypes.ADD, payload: { cost } });
  };
  const removeCost = (costId) => {
    dispatch({ type: actionTypes.REMOVE, payload: { costId } });
  };
  return <div></div>;
}
