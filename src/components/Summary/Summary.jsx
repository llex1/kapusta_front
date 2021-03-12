import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Summary.module.css";

class Summary extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Сводка</h3>
        <ul className={`${styles.list} ${styles.scrollbar}`}>
          {this.props.months &&
            this.props.months.map((month, summary, id) => (
              <li key={id} className={styles.listItem}>
                {month} <span className={styles.listItemSum}>{summary}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   summary: summary(state),
// });
// connect(mapStateToProps)();
export default Summary;
