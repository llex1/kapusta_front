import React, { Component } from 'react';
import styles from './Background.module.css';
import sprite from '../../assets/img/sprite.svg';

class Background extends Component {
  // state = {};
  render() {
    const logoPage = (
      <h1 className={styles.logoPage}>
        Kapusta <span className={styles.subLogoPage}>Smart Finance</span>
      </h1>
    );

    return (
      <>
        <div className={styles.backgroundFon}>
          <div className={styles.backgroundPage}>
            <div className="container">
              {/* <div className={styles.containerr}> */}
              {logoPage}

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
export default Background;
