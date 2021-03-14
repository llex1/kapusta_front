const initState = {
  email: "" /* "user@gmail.com" */,
  jwt: "" /* "JWToken" */,
}

const userReducer = (state = initState, {type, payload})=>{
  switch (type) {
    case "login/ok":
      return {
        ...state,
        "jwt": payload.jwt,
        "email": payload.email
      }
    default:
      return state
  }
}

export default userReducer;