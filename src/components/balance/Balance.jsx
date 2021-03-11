import React from "react";
import styles from "./Balance.module.css";
import sprite from "../../assets/img/sprite.svg"

function Balance (){
  return (
    <>
    <div className={styles.container}>
  <div className={styles.tabletBox}>
  <div className={styles.reportsBox}>
  <p className={styles.reportsLink} >
    {" "}
    Перейти к отчетам
  </p>
  <svg width="14" height="14">
  <use href={sprite+"#icon-schedule"}/>
  </svg>
  </div>
    <div className={styles.balanceBox}>
    <p className={styles.balance}>Баланс:</p>
    <button className={styles.moneyBtn}>00.00 UAH</button>
    <button className={styles.confirmBtn}>Подтвердить</button>
    </div>
  </div>
  <div className={styles.notification}>
    <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
    <p>Ты не можешь тратить деньги пока их у тебя нет :)</p>
  </div>
</div>
    </>
  )
}

export default Balance;
