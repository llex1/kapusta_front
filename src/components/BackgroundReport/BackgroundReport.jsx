import React, { Component } from "react";
import styles from "./BackgroundReport.module.css";
import sprite from "../../assets/img/sprite.svg";

class BackgroundReport extends Component {
  // state = {};
  render() {
    return (
      <>
        <div className={styles.backgroundFon}>
          {this.props.children}

          <div className={styles.backgroundFooter}></div>
        </div>
      </>
    );
  }
}
export default BackgroundReport;
