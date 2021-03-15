import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { IncomeForm } from "../IncomeForm/IncomeForm";
import { IncomeTable } from "../IncomeTable/IncomeTable";
import styles from "./IncomeAndCosts.module.css";
import costsActions from "../../redux/costs/costsActions";
import { connect } from "react-redux";

class IncomeAndCosts extends Component {
  state = {
    costs: [],
  };

  handleAddCosts = () => {
    this.setState((prev) => ({
      costs: [...prev.costs],
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
            <IncomeTable costs={this.state.costs} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddCosts: costsActions.addCost,
};

export default connect(null, mapDispatchToProps)(IncomeAndCosts);
