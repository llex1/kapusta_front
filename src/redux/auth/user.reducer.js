import initState from '../../redux/initState';

const userReducer = (state = initState.user, { type, payload }) => {
  switch (type) {
    case "login/start":
      return {
        ...state,
        message: '',
      };
    case "login/ok":
      return {
        ...state,
        jwt: payload.jwt,
        email: payload.email,
      };
    case "login/Error":
    return {
      ...state,
      message: payload.message,
    };
    case "regitster/ok":
      return {
        ...state,
        jwt: payload.jwt,
        email: payload.email,
        avatar: payload.avatar,
      };
    case 'action-universalModal/AnswerExit':
      return { ...state, email: payload.email, jwt: payload.jwt };
    case "clearErrorMessage":
      return {...state, message: ''}
    default:
      return state;
  }
};

export default userReducer;
