import React, { Component } from 'react';
import styles from './BackgroundAuth.module.css';
import sprite from '../../assets/img/sprite.svg';

class BackgroundAuth extends Component {
  // state = {};
  render() {
    return (
      <>
        <div className={styles.backgroundFon}>
          <div className={styles.backgroundPage}></div>
            <div className="container">
              <div className={styles.svgKapusta}>
                <svg>
                  <use href={sprite + '#icon-kapusta2'} />
                </svg>
              </div>
            </div>

        </div>
      </>
    );
  }
}
export default BackgroundAuth;
