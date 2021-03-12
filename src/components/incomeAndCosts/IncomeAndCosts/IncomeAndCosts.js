import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { IncomeForm } from "../IncomeAndCostsEnter/IncomeAndCostsEnter"
import {Table} from "../Table/Table"
import styles from "./IncomeAndCosts.module.css";

class IncomeAndCosts extends Component {
    state = {
    costs: [],
    };
    
    getDate = () => {
        const today = new Date();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return time;
    }
    
    handleAddCosts = (description, category, sum) => {
    const costsObj = {
      date: this.getDate(),
      description: description,
      category: category,
      sum: sum,
    };
      console.log(costsObj);
      this.setState((prev) => ({
        costs: [...prev.costs, costsObj],
      }));
  };

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
                    <IncomeForm onAddCosts={this.handleAddCosts} />
                    <Table costs={this.state.costs} />
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeAndCosts;