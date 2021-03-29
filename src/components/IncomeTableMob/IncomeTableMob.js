import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./IncomeTableMob.module.css";
import sprite from "../../assets/img/sprite.svg";
import modalAction from "../../redux/universalModal/universalModal.action";
import dbOperations from "../../redux/db/db.operations";
import costsOperations from "../../redux/db/db.operations";

export function IncomeTableMob(props) {
  const costs = useSelector((state) => state.db.costs);
  const profits = useSelector((state) => state.db.profits);
  const dispatch = useDispatch();
  const jwt = useSelector((store) => store.user.jwt);
  const answerTrue = useSelector((state) => state.universalModal.answer);
  const delId = useSelector((state) => state.universalModal.delElementId);

  const [eventId, changeEventId] = useState(null);

  const costDelete = (e) => {
    changeEventId(e.target.dataset.id);
    dispatch(modalAction.universalModalShowOpen(e.target.dataset.id));
  };

  useEffect(() => {
    if (answerTrue && delId === eventId) {
      if (props.title === "costs") {
        dispatch(dbOperations.deleteCostOperation({ id: delId }, jwt));
      }
      if (props.title === "profit") {
        dispatch(dbOperations.deleteProfitOperation({ id: delId }, jwt));
      }
      dispatch(modalAction.universalModalShowAnswerReset);
    }
  }, [answerTrue, delId]);

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
        <li className={styles.bodyRaw} key={index}>
          <div className={styles.descPosition}>
          <p className={styles.description}>{el.description}</p>
          <div className={styles.dateCatWrapper}>
            <p className={styles.date}>{el.date}</p>
            <p className={styles.category}>{el.category}</p>
          </div>
          </div>
          <p
            className={
              props.title === "costs" ? styles.sum : styles.bodyGreen
            }
          >
            {props.title === "costs" ? <span>- </span> : ""}
            {+el.sum + " грн."}
          </p>
          <div className={styles.delete}>
            <button
              type="button"
              onClick={costDelete}
              data-id={`${el._id}`}
              className={styles.deleteBtn}
            >
              <svg
                width="18"
                height="18"
                data-id={`${el._id}`}
                className={styles.deleteBtnSvg}
              >
                <use href={sprite + "#icon-basket"} data-id={`${el._id}`} />
              </svg>
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className={styles.costsHistory}>
      <ul className={styles.body}>{mapData}</ul>
      </div>
  );
}

export default IncomeTableMob;
