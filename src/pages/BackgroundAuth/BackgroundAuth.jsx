import React, { Component } from 'react';
import styles from './BackgroundAuth.module.css';
import sprite from '../../assets/img/sprite.svg';

class BackgroundAuth extends Component {
  // state = {};
  render() {
    return (
      <>
        <div className={styles.backgroundFon}>
          <div className={styles.backgroundPage}>
            <div className="container">
              <svg
                width="83px"
                height="89px"
                className={styles.svgKapustaMobileTop}
              >
                <use href={sprite + '#icon-KapustaTopMobile'} />
              </svg>
              <svg
                width="83px"
                height="89px"
                className={styles.svgKapustaMobileBottom}
              >
                <use href={sprite + '#icon-KapustaBottomMobile'} />
              </svg>

              <div className={styles.svgKapusta}>
                <svg>
                  <use href={sprite + '#icon-kapusta2'} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BackgroundAuth;
