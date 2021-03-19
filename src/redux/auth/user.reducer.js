import initState from "../../redux/initState";

const userReducer = (state = initState.user, { type, payload }) => {
  switch (type) {
    case "login/ok":
      return {
        ...state,
        jwt: payload.jwt,
        email: payload.email,
      };
    case "regitster/ok":
      return {
        ...state,
        jwt: payload.jwt,
        email: payload.email,
      };
    case "action-universalModal/AnswerExit":
      return { ...state, email: payload.email, jwt: payload.jwt };
    default:
      return state;
  }
};

export default userReducer;
