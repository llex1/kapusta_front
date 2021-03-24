import axios from "axios";
import actionSummary from "./actionSummary";



 const fetchSummery = (name) => (dispatch, getState) => {
  const date = new Date().getFullYear() * 12 + new Date().getMonth() + 1;
  //24255
  console.log(`https://kapusta.fun/api/${name}/half-year/${date}`);
  dispatch(actionSummary.fetchSummeryRequest());
  const { jwt } = getState().user;
  axios.defaults.headers = { Authorization: `Bearer ${jwt}` };
  axios
    .get(`https://kapusta.fun/api/${name}/half-year/${date}`)
    .then((resp) =>
      dispatch(
        actionSummary.fetchSummerySuccess({
          type: "costsAdd/ok",
          payload: resp
        })
      )
    )
    .catch((err) => {
      dispatch(actionSummary.fetchSummeryError(err));
    });
};
export default fetchSummery