import axios from "axios";
import actionSummary from "./actionSummary";
import moment from "moment";

// axios.defaults.baseURL = "http://kapusta.fun/api/costs/half-year/";

export const fetchSummery = (date) => (dispatch, getState) => {
  const date = new Date().getFullYear() * 12 + new Date().getMonth() + 1;
  //24255
  dispatch(actionSummary.fetchSummeryRequest());
  const { jwt } = getState().user;
  axios.defaults.headers = { Authorization: `Bearer ${jwt}` };
  axios
    .get(`http://kapusta.fun/api/costs/half-year/${date}`)
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
