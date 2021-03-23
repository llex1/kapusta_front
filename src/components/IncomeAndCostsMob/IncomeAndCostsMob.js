import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeTableMob from "../IncomeTableMob/IncomeTableMob";
import Balance from "../balance/Balance";
import BackgroundAuth from "../BackgroundAuth";
import Calendar from "../Calendar";
import styles from "./IncomeAndCostsMob.module.css";

class IncomeAndCostsMob extends Component {
  state = {
    isOpened: false
  };

  handleSwitch = () => {
    if (this.state.isOpened === false) {
      this.setState({ isOpened: true })
    } else {
      this.setState({isOpened:false})
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <BackgroundAuth />
        <div className={styles.positionWrapper}>
          {this.state.isOpened === true ?
            (<div className={styles.formWrapper}>
            <IncomeForm onSwitch={this.handleSwitch} title={this.props.title} />
          </div>) : (<>
          <Balance />
          <div className={styles.calendarWrapper}>
            <Calendar />
              </div>
              <div className={styles.tableWrapper}>
                <IncomeTableMob title={this.props.title} />
                </div>
            <div className={styles.btnWrapper}>
                <NavLink
                   onClick={this.handleSwitch}
            to="/costs"
            className={`${styles.costBtn} ${styles.textBtn}`}
                activeClassName={styles.active}
          >
            РАСХОД
          </NavLink>
                <NavLink
                  onClick={this.handleSwitch}
            to="/profit"
            className={`${styles.incomeBtn} ${styles.textBtn}`}
                activeClassName={styles.active}
          >
                ДОХОД
          </NavLink>
              </div>
              </>)}
        </div>
      </div>
    );
  }
}

export default IncomeAndCostsMob;
