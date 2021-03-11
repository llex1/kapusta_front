import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./profit.module.css";

class profit extends Component {
  render() {
    return (
      <div className="container">
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
          <div className={styles.incomeWrapper}></div>
        </div>
      </div>
    );
  }
}
export default profit;
