import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './IncomeTable.module.css';
import sprite from '../../assets/img/sprite.svg';
import modalAction from '../../redux/universalModal/universalModal.action';
import costsOperations from '../../redux/db/db.operations';

export function IncomeTable(props) {
  const costs = useSelector(state => state.db.costs);
  const profits = useSelector(state => state.db.profits);
  const dispatch = useDispatch();
  const jwt = useSelector(store => store.user.jwt);
  const answerTrue = useSelector(state => state.universalModal.answer);
  const delId = useSelector(state => state.universalModal.delElementId);

  const [eventId, changeEventId] = useState(null);

  const costDelete = e => {
    changeEventId(e.target.dataset.id);
    dispatch(modalAction.universalModalShowOpen(e.target.dataset.id));
  };

  useEffect(() => {
    if (answerTrue && delId === eventId) {
      if (props.title === 'costs') {
        dispatch(costsOperations.deleteCostOperation({ id: delId }, jwt));
      }
      if (props.title === 'profit') {
        dispatch(costsOperations.deleteProfitOperation({ id: delId }, jwt));
      }
      dispatch(modalAction.universalModalShowAnswerReset);
    }
  }, [answerTrue, delId]);

  let mapData;
  let data;
  if (props.title === 'costs') {
    data = costs;
  } else if (props.title === 'profit') {
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
              props.title === 'costs' ? styles.bodySum : styles.bodyGreen
            }
          >
            {props.title === 'costs' ? <span>- </span> : ''}
            {+el.sum + ' грн.'}
          </td>
          <td className={styles.delete}>
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
                <use href={sprite + '#icon-basket'} data-id={`${el._id}`} />
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
