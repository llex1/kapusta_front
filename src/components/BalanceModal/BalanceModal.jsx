import React, { useState, useEffect } from "react";

import styles from "../BalanceModal/BalanceModal.module.css";

const BalanceModal = () => {
  return (
    <div id="overlay" className={styles.mainContainer}>
      <div className={styles.container}>
        <p className={styles.greeting}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.description}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};

export default BalanceModal;
