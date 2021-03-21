import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Background from "../../components/Background";
import DiagramsContainer from "../../components/Diagrams";
import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
import styles from "./Report.module.css";
import BackToMain from "../../components/BackToMain/BackToMain";
import BackgroundReport from "../../components/BackgroundReport";

export default function Report() {
  return (
    <React.Fragment>
      <Header />
      <BackgroundReport>
        <div className={styles.wrapper}>
          <BackToMain />
          <div className={styles.balancPeriod}>
            <div className={styles.wrapperBalanc}>
              <p className={styles.balancTitle}>Баланс:</p>
              <p className={styles.balancAmount}>55 000.00 UAH</p>
              <button className={styles.balancBtn}>Подтвердить</button>
            </div>
            <CurrentPeriod />
          </div>
        </div>
        <DiagramsContainer />
      </BackgroundReport>
    </React.Fragment>
  );
}
