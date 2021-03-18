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
      console.log(error);
      dispatch(dbActions.addCostError(error));
    });
};

const deleteCostOperation = (data, jwt) => function modal(dispatch){
  dispatch(dbActions.deleteCostRequest());
  console.log(data);
  axios
    .delete(`${url}/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then(() => dispatch(dbActions.deleteCostSuccess({ id: data.id })))
    .catch((error) => {
      console.log(error);
      dispatch(dbActions.deleteCostError(error));
    });
};

export default { addCostOperation, deleteCostOperation };
