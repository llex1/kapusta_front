import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Summary.module.css";
import { fetchSummery } from "../../redux/summary/operationSummery";

class Summary extends Component {
  componentDidMount() {
    this.props.toFetchProducts();
  }

  render(){
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Сводка</h3>
        <ul className={`${styles.list} ${styles.scrollbar}`}>
          {this.props.array &&
            this.props.array.data.map((el) => (
              <li key={el.month} className={styles.listItem}>
                {el.month} <span className={styles.listItemSum}>{el.sum}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  array: state.summary.payload,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toFetchProducts: (date) => dispatch(fetchSummery()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
