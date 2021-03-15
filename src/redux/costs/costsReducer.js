import initState from "../initState.js";
import costsTypes from "./costsTypes";

const items = (state = initState.db.costs, { type, payload }) => {
  switch (type) {
    case costsTypes.ADD:
      return [...state, payload.cost];

    case costsTypes.REMOVE:
      return state.filter((cost) => cost.id !== payload.costId);

    default:
      return state;
  }
};

export default {
  items,
};
