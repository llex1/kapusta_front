import React, { Component } from "react";
import styles from "./BackgroundAuth.module.css";
import sprite from "../../assets/img/sprite.svg";

class BackgroundAuth extends Component {
  // state = {};
  render() {
    const heightSize = { height: this.props.size };
    return (
      <>
        <div className={styles.backgroundFon} style={heightSize}>
          <div className={styles.backgroundPage}></div>

          <div className="container">
            <div className={styles.svgKapusta}>
              <svg>
                <use href={sprite + "#icon-kapusta2"} />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BackgroundAuth;
