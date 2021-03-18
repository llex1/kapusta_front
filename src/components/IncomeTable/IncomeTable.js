import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './IncomeTable.module.css';
import sprite from '../../assets/img/sprite.svg';
import modalAction from '../../redux/universalModal/universalModal.action';
import modalOperation from '../../redux/universalModal/universalModal.operation.js';
import costsOperations from '../../redux/db/db.operations';

export function IncomeTable(props) {
  const costs = useSelector(state => state.db.costs);
  const dispatch = useDispatch();
  const jwt = useSelector(store => store.user.jwt);
  const answerTrue = useSelector(state => state.universalModal.answer);
  const delId = useSelector(state => state.universalModal.id);

const [eventId, changeEventId]=useState(null);

  const costDelete = e => {
    changeEventId(e.target.dataset.id)
    dispatch(modalAction.universalModalShowOpen(e.target.dataset.id))
    };

  useEffect(()=>{
    if(answerTrue && delId===eventId){
  // console.log('modal answer NOW - ', answerTrue)
    dispatch(costsOperations.deleteCostOperation({ id: delId}, jwt))
    dispatch(modalAction.universalModalShowAnswerReset)
  }},[answerTrue, delId]
  );

    const mapCosts = costs.map((el, index) => {
    return (
      <tr className={styles.bodyRaw} key={index}>
        <td className={styles.date}>{el.date}</td>
        <td className={styles.description}>{el.description}</td>
        <td className={styles.category}>{el.category}</td>
        <td className={styles.bodySum}>{el.sum}</td>
        <td className={styles.delete}>
          <button type="button" onClick={costDelete} data-id={`${el._id}`}>
            <svg width="18" height="18" data-id={`${el._id}`}>
              <use href={sprite + '#icon-basket'} data-id={`${el._id}`} />
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className={styles.costsHistory}>
      <thead className={styles.header}>
        <tr className={styles.headerRaw}>
          <th className={styles.date}>ДАТА</th>
          <th className={styles.description}>ОПИСАНИЕ</th>
          <th className={styles.category}>КАТЕГОРИЯ</th>
          <th className={styles.sum}>СУММА</th>
          <th className={styles.delete}> </th>
        </tr>
      </thead>
      <tbody>{mapCosts}</tbody>
    </table>
  );
}

export default IncomeTable;
