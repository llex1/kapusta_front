import axios from "axios";
import actionSummary from "./actionSummary";
import moment from "moment";

axios.defaults.baseURL = "http://kapusta.fun/api/costs/half-year/";

export const fetchSummery = (date) => (dispatch, getState) => {
  // console.log(moment(Date.now()).format("MM"));
  dispatch(actionSummary.fetchSummeryRequest());
  const { jwt } = getState().user;
  axios.defaults.headers = { Authorization: `Bearer ${jwt}` };
  axios
    // ${moment(Date.now()).format('MM')}
    .get(`/12`)
    .then((resp) =>
      dispatch(
        actionSummary.fetchSummerySuccess({
          type: "costsAdd/ok",
          payload: resp,
        })
      )
    )
    .catch((err) => {
      dispatch(actionSummary.fetchSummeryError(err));
      // console.log(err);
    });
};
