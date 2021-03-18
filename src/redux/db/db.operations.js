import axios from "axios";
import dbActions from "./db.action";

const url = "http://kapusta.fun/api/costs";

axios.default.baseURL = url;

const addCostOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.addCostRequest());
  axios
    .post(`${url}/add`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => dispatch(dbActions.addCostSuccess([data])))
    .catch((error) => {
      dispatch(dbActions.addCostError(error));
    });
};

const deleteCostOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.deleteCostRequest());
  axios
    .delete(`${url}/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(() => dispatch(dbActions.deleteCostSuccess({ id: data.id })))
    .catch((error) => {
      dispatch(dbActions.deleteCostError(error));
    });
};

const getDateFromCalendar = (data, jwt) => (dispatch) => {
  dispatch(dbActions.getCostByDateRequest());
  console.log(`${url}/date/${data}`);
  axios
    .get(`${url}/date/${data}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      dispatch(dbActions.getCostByDateSuccess(data));
    })
    .catch((error) => dispatch(dbActions.getCostByDateError(error)));
};

export default { addCostOperation, deleteCostOperation, getDateFromCalendar };
