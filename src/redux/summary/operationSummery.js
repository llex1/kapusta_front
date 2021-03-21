import axios from "axios";
import actionSummary from "./actionSummary";
import moment from "moment";

axios.defaults.baseURL = "http://kapusta.fun/api/costs/half-year/";

export const fetchSummery = (date) => (dispatch, getState) => {
  const date = new Date().getFullYear() * 12 + new Date().getMonth() + 1;
  dispatch(actionSummary.fetchSummeryRequest());
  const { jwt } = getState().user;
  axios.defaults.headers = { Authorization: `Bearer ${jwt}` };
  axios
    .get(`/${date}`)
    .then((resp) =>
      dispatch(
        actionSummary.fetchSummerySuccess({
          type: "costsAdd/ok",
          payload: resp.json(),
        })
      )
    )
    .catch((err) => {
      dispatch(actionSummary.fetchSummeryError(err));
    });
};
