import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Balance.module.css";
import sprite from "../../assets/img/sprite.svg";

import dbOperations from "../../redux/db/db.operations";
import BalanceModal from "../../components/BalanceModal";

function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.db.balance);
  const jwt = useSelector((store) => store.user.jwt);

  useEffect(() => {
    dispatch(dbOperations.getBalanceOperation(jwt));
  });
  const changeBalance = (e) => {
    e.preventDefault();
    dispatch(
      dbOperations.addBalanceOperation(
        {
          balance: e.target.balance.value,
        },
        jwt
      )
    );
  };
  let newValue;
  let setPlaceholder;
  if (balance === 0) {
    setPlaceholder = "00.00 UAH";
  } else {
    setPlaceholder = "";
    newValue = `${balance}.00 UAH`;
  }
  return (
    <>
      <div className={styles.container}>
        {balance === 0 ? <BalanceModal /> : ""}
        <div className={styles.tabletBox}>
          <div className={styles.reportsBox}>
            <p className={styles.reportsLink}> Перейти к отчетам</p>
            <svg width="14" height="14">
              <use href={sprite + "#icon-schedule"} />
            </svg>
          </div>
          <form className={styles.balanceBox} onSubmit={changeBalance}>
            <label className={styles.balance}>
              Баланс:
              <input
                className={styles.moneyInput}
                name="balance"
                value={newValue}
                type="text"
                placeholder={setPlaceholder}
              />
            </label>
            {balance > 0 ? (
              <button type="submit" className={styles.confirmBtn} disabled>
                Подтвердить
              </button>
            ) : (
              <button type="submit" className={styles.confirmBtn}>
                Подтвердить
              </button>
            )}
          </form>
        </div>
        <div className={styles.notification}>
          <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
          <p>Ты не можешь тратить деньги пока их у тебя нет :)</p>
        </div>
      </div>
    </>
  );
}

export default Balance;
