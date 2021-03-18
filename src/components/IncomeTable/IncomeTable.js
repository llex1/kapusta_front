import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./IncomeTable.module.css";
import sprite from "../../assets/img/sprite.svg";
// import modalAction from "../../redux/universalModal/universalModal.action";
import costsOperations from "../../redux/db/db.operations";

export function IncomeTable(props) {
  const dispatch = useDispatch();
  const costs = useSelector((state) => state.db.costs);
  const jwt = useSelector((store) => store.user.jwt);
  const profits = useSelector((state) => state.profits);

  const costDelete = (e) => {
    e.preventDefault();
    dispatch(
      costsOperations.deleteCostOperation({ id: e.target.dataset.id }, jwt)
    );
  };

  const profitDelete = (e) => {
    e.preventDefault();
    dispatch(
      costsOperations.deleteProfitOperation({ id: e.target.dataset.id }, jwt)
    );
  };

  let mapData;
  let data;
  if (props.title === "costs") {
    data = costs;
  } else if (props.title === "profit") {
    data = profits;
  }
  if (data) {
    mapData = data.map((el, index) => {
      return (
        <tr className={styles.bodyRaw} key={index}>
          <td className={styles.date}>{el.date}</td>
          <td className={styles.description}>{el.description}</td>
          <td className={styles.category}>{el.category}</td>
          <td
            className={
              props.title === "costs" ? styles.bodySum : styles.bodyGreen
            }
          >
            {props.title === "costs" ? <span>- </span> : ""}
            {+el.sum + " грн."}
          </td>
          <td className={styles.delete}>
            <button type="button" onClick={costDelete} data-id={`${el._id}`}>
              <svg width="18" height="18" data-id={`${el._id}`}>
                <use href={sprite + "#icon-basket"} data-id={`${el._id}`} />
              </svg>
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className={styles.costsHistory}>
      <thead className={styles.header}>
        <tr className={styles.headerRaw}>
          <th className={styles.date}>ДАТА</th>
          <th className={styles.description}>ОПИСАНИЕ</th>
          <th className={styles.category}>КАТЕГОРИЯ</th>
          <th className={styles.sum}>СУММА</th>
        </tr>
      </thead>
      <tbody className={styles.body}>{mapData}</tbody>
    </table>
  );
}

export default IncomeTable;
