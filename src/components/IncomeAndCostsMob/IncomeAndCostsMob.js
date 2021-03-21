import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeTableMob from "../IncomeTableMob/IncomeTableMob";
import Balance from "../balance/Balance";
import BackgroundAuth from "../BackgroundAuth";
import Calendar from "../Calendar";
import styles from "./IncomeAndCostsMob.module.css";

class IncomeAndCostsMob extends Component {
  render() {
    return (
      <div className={styles.container}>
        <BackgroundAuth />
        <div className={styles.positionWrapper}>
          <div className={styles.formWrapper}>
            <IncomeForm title={this.props.title} />
            </div>
          <div className={styles.displayNone}>
          <Balance />
          <div className={styles.calendarWrapper}>
            <Calendar />
            </div>
            <IncomeTableMob title={this.props.title}/>
            <div>
          <NavLink
            to="/costs"
            className={`${styles.costBtn} ${styles.textBtn}`}
            activeClassName={styles.active}
          >
            РАСХОД
          </NavLink>
          <NavLink
            to="/profit"
            className={`${styles.incomeBtn} ${styles.textBtn}`}
            activeClassName={styles.active}
          >
                ДОХОД
          </NavLink>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default IncomeAndCostsMob;
