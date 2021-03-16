import costsTypes from "./costsTypes";

const costReducer = (state, { type, payload }) => {
  switch (type) {
    case costsTypes.ADD:
      return { ...state, [state.costs]: [...payload.cost] };

    case costsTypes.REMOVE:
      return state.filter((cost) => cost.id !== payload.costId);

    default:
      return state;
  }
};

export default {
  costReducer,
};
