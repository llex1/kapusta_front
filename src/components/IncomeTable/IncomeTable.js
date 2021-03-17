import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./IncomeTable.module.css";
import sprite from "../../assets/img/sprite.svg";
import modalAction from "../../redux/universalModal/universalModal.action";
import costsOperations from "../../redux/db/db.operations";

export function IncomeTable() {
  const costs = useSelector((state) => state.db.costs);
  const dispatch = useDispatch();
  const jwt = useSelector((store) => store.user.jwt);

  const costDelete = (e) => {
    e.preventDefault();
    dispatch(
      costsOperations.deleteCostOperation({ id: e.target.dataset.id }, jwt)
    );
  };

  const mapCosts = costs.map((el, index) => {
    return (
      <tr key={index}>
        <td>{el.date}</td>
        <td>{el.description}</td>
        <td>{el.category}</td>
        <td>{el.sum}</td>
        <td>
          <button type="button" onClick={costDelete} data-id={`${el._id}`}>
            <svg width="14" height="14" data-id={`${el._id}`}>
              <use href={sprite + "#icon-basket"} data-id={`${el._id}`} />
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className={styles.costsHistory}>
      <thead>
        <tr>
          <th>ДАТА</th>
          <th>ОПИСАНИЕ</th>
          <th>КАТЕГОРИЯ</th>
          <th>СУММА</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>{mapCosts}</tbody>
    </table>
  );
}

export default IncomeTable;
