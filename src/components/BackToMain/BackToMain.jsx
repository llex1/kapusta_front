import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../assets/img/sprite.svg";
import styles from "./BackToMain.module.css";

function BackToMain() {
  return (
    <Link className={styles.BackToMainBox} to="/costs">
      <svg className={styles.leftArrow} width="24" height="24">
        <use href={sprite + "#icon-left"} />
      </svg>
      <span className={styles.backToMainTitle}>Вернуться на главную</span>
    </Link>
  );
}

export default BackToMain;
