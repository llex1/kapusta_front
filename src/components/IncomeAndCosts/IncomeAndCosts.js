import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeTable from "../IncomeTable/IncomeTable";
import styles from "./IncomeAndCosts.module.css";

class IncomeAndCosts extends Component {
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
          <div className={styles.incomeWrapper}>
            <IncomeForm title={this.props.title} />
            <IncomeTable title={this.props.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeAndCosts;
