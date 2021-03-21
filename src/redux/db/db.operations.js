import axios from "axios";
import dbActions from "./db.action";

const url = "http://localhost:8080/api";

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
    .then(({ data }) => dispatch(dbActions.addCostSuccess(data)))
    .catch((error) => dispatch(dbActions.addCostError(error)));
};

const deleteCostOperation = (cost, jwt) =>
  function modal(dispatch) {
    dispatch(dbActions.deleteCostRequest());
    axios
      .delete(`${url}/costs/${cost.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(({ data }) =>
        dispatch(
          dbActions.deleteCostSuccess({ id: cost.id, balance: data.balance })
        )
      )
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
      dispatch(dbActions.addProfitSuccess(data));
    })
    .catch((error) => {
      dispatch(dbActions.addProfitError(error));
    });
};

const deleteProfitOperation = (profit, jwt) => (dispatch) => {
  dispatch(dbActions.deleteProfitRequest());
  axios
    .delete(`${url}/profit/${profit.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) =>
      dispatch(
        dbActions.deleteProfitSuccess({ id: profit.id, balance: data.balance })
      )
    )
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
const addBalanceOperation = (data, jwt) => (dispatch) => {
  dispatch(dbActions.addBalanceRequest());
  axios
    .patch(`${url}/balance`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      dispatch(dbActions.addBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(dbActions.addBalanceError(error));
    });
};

const getBalanceOperation = (jwt) => (dispatch) => {
  dispatch(dbActions.getBalanceRequest());
  axios
    .get(`${url}/balance`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(({ data }) => {
      dispatch(dbActions.getBalanceSuccess(data.balance));
    })
    .catch((error) => {
      dispatch(dbActions.getBalanceError(error));
    });
};

export default {
  addCostOperation,
  deleteCostOperation,
  getDateCostCalendar,
  addProfitOperation,
  deleteProfitOperation,
  getDateProfitCalendar,
  addBalanceOperation,
  getBalanceOperation,
};
