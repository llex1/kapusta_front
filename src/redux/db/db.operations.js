import axios from "axios";
import dbActions from "./db.action";

const url = "http://kapusta.fun/api";

axios.default.baseURL = url;

const addCostOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.addCostRequest());
  axios
    .post(`${url}/costs/add`, data, {
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

const deleteCostOperation = (data, jwt) => function modal(dispatch){
  dispatch(dbActions.deleteCostRequest());
  axios
    .delete(`${url}/costs/${data.id}`, {
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

const getDateCostCalendar = (data, jwt) => (dispatch) => {
  dispatch(dbActions.getCostByDateRequest());
  axios
    .get(`${url}/costs/date/${data}`, {
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

const addProfitOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.addProfitRequest());
  axios
    .post(`${url}/profit/add`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      dispatch(dbActions.addProfitSuccess([data]));
    })
    .catch((error) => {
      dispatch(dbActions.addProfitError(error));
    });
};

const deleteProfitOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.deleteProfitRequest());
  axios
    .delete(`${url}/profit/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(() => dispatch(dbActions.deleteProfitSuccess({ id: data.id })))
    .catch((error) => {
      dispatch(dbActions.deleteProfitError(error));
    });
};

const getDateProfitCalendar = (data, jwt) => (dispatch) => {
  dispatch(dbActions.getProfitByDateRequest());
  axios
    .get(`${url}/profit/date/${data}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      dispatch(dbActions.getProfitByDateSuccess(data));
    })
    .catch((error) => dispatch(dbActions.getProfitByDateError(error)));
};

export default {
  addCostOperation,
  deleteCostOperation,
  getDateCostCalendar,
  addProfitOperation,
  deleteProfitOperation,
  getDateProfitCalendar,
};
