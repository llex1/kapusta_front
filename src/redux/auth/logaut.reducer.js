import InitState from '../initState.js'

const LogautUserRerucer = (state = InitState.user, action) => {
    switch (action.type) {
        case "action-LogautUser":
            return {...state,
                       email: action.payload.email,
                       jwt: action.payload.jwt};
        default:
            return {
                ...state
            }
    }
}

export default LogautUserRerucer;