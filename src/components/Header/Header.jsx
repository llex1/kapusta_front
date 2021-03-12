import React, { Component } from 'react';

import styles from './Header.module.css';

class Header extends Component {






  render(){
    return(
      <div className="container">
        <header className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoImg}></span>
              <span className={styles.logoText}>Kapusta</span>
            </div>
        </header>
      </div>

    )
  }
}

export default Header 