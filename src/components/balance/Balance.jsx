import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Balance.module.css';
import sprite from '../../assets/img/sprite.svg';

import dbOperations from '../../redux/db/db.operations';
import BalanceModal from '../BalanceModal';

function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.db.balance);
  const jwt = useSelector(store => store.user.jwt);

  useEffect(() => {
    dispatch(dbOperations.getBalanceOperation(jwt));
  });
  const changeBalance = e => {
    e.preventDefault();
    if (e.target.balance.value) {
      dispatch(
        dbOperations.addBalanceOperation(
          {
            balance: e.target.balance.value,
          },
          jwt,
        ),
      );
    }
    e.target.balance.value = '';
  };

  let setPlaceholder;
  if (balance === 0) {
    setPlaceholder = '00.00 UAH';
  } else {
    setPlaceholder = `${balance}.00 UAH`;
  }
  return (
    <div className={styles.container}>
      {balance === 0 ? <BalanceModal /> : ''}
      <div className={styles.tabletBox}>
        <div className={styles.reportsBox}>
          <p className={styles.reportsLink}> Перейти к отчетам</p>
          <svg width="14" height="14" fill="#52555F">
            <use href={sprite + '#icon-schedule'} />
          </svg>
        </div>
        <form className={styles.balanceBox} onSubmit={changeBalance}>
          <label className={styles.balance}>
            Баланс:
            <input
              className={styles.moneyInput}
              name="balance"
              type="text"
              placeholder={setPlaceholder}
            />
          </label>
          <button type="submit" className={styles.confirmBtn}>
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Balance;
