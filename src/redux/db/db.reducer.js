import initState from '../../redux/initState';

const dbReducer = (state = initState.db, {type, payload})=>{
  switch (type) {
    case "costsAdd/ok":
      return {
        ...state,
        costs:[...state.costs, ...payload]
      }
    default:
      return state
  }
}

export default dbReducer;