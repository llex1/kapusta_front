import axios from "axios";
import reportAction from "./reportAction";

axios.defaults.baseURL = "http://kapusta.fun/api/report";

const report = (date) => (dispatch, getState) => {
  dispatch(reportAction.reportRequest());
  const { jwt } = getState().user;
  axios.defaults.headers = { Authorization: `Bearer ${jwt}` };

  axios
    .get(`/${date}`)
    .then(({ data }) => {
      dispatch(reportAction.reportSuccess(data));
    })
    .catch((err) => {
      dispatch(reportAction.reportError(err));
    });
};

export default { report };
