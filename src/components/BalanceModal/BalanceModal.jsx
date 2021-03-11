import React, { useState, useEffect } from "react";

import styles from "../BalanceModal/BalanceModal.module.css";

const BalanceModal = () => {
  const [showModal, setShowModal] = useState(true);

  const modalToggle = () => {
    setShowModal(() => !showModal);
  };
  useEffect(() => {
    //тут буде логіка закриття модалки, якщо баланс більше 0
    document.getElementById("overlay").addEventListener("click", modalToggle);
  });

  return (
    <div
      id="overlay"
      className={showModal ? styles.mainContainer : styles.notShow}
    >
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
