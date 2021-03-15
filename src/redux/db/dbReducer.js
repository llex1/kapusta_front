import initState from "../../redux/initState";

const userReducer = (state = initState.db, { type, payload }) => {
  switch (type) {
    case "":
      return {
        ...state,
        costs: [
          {
            date: payload.date,
            category: payload.category,
            describe: payload.describe,
            sum: payload.sum,
          },
        ],
      };

    default:
      return state;
  }
};

export default userReducer;
