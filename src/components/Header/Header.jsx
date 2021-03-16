import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import action from '../../redux/universalModal/universalModal.action.js';

class Header extends Component {
  modalOpen = e => {
    if (e.target.nodeName === 'U') {
      this.props.action_exit();
    }
  };

   userName = this.props.state.user.email;

//  componentDidMount() {
//    console.log(this.props.state.user.jwt);
//  } 

  render() {
    return (
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoImg}></span>
            <span className={styles.logoText}>Kapusta</span>
          </div>

    {this.props.state.user.jwt && <div className={styles.logoInfo}>
      <div className={styles.bgr}>
        <p className={styles.userName}>U</p>
      </div>
      <p className={styles.logout}>{this.userName}</p>
      <div className={styles.fonVertikal}></div>
      <button className={styles.exit} onClick={this.modalOpen}>
        <u>Выйти</u>
      </button>
    </div>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    state: state,
}
}

const mapDispatchToProps = dispatch => {

  return {
    action_exit: obj => {
      dispatch(action.universalModalShowOpenWithTile);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
