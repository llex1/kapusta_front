import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import action from '../../redux/universalModal/universalModal.action.js';
import { Link } from 'react-router-dom';
import sprite from '../../assets/img/sprite.svg';

class Header extends Component {
  modalOpen = e => {
    if (
      e.target.nodeName === 'U' ||
      e.target.nodeName === 'svg' ||
      e.target.nodeName === 'use'
    ) {
      this.props.action_exit();
    }
  };

  userName = this.props.state.user.email;
  avatarUrl = this.props.state.user.avatar;

  indexR = this.userName.search('@');
  name = () => {
    if (this.indexR < 10) {
      return this.userName.slice(0, this.indexR);
    } else {
      return this.userName.slice(0, 10 + 1);
    }
  };

  render() {
    return (
      <div className="container">
        <header className={styles.header}>
          <Link to="/" alt=" " className={styles.logoLink}>
            <div className={styles.logo}>
              <span className={styles.logoImg}></span>
              <span className={styles.logoText}>Kapusta</span>
            </div>
          </Link>

          {this.props.state.user.jwt && !this.props.userFalse && (
            <div className={styles.logoInfo}>
              <div className={styles.bgr}>
                <img
                  src={this.avatarUrl}
                  alt=""
                  className={styles.userAvatar}
                />
              </div>

              <p className={styles.logout}>{this.name()}</p>

              <div className={styles.fonVertikal}></div>
              <button className={styles.exit} onClick={this.modalOpen}>
                <u>Выйти</u>
              </button>

              <svg className={styles.exitMobile} onClick={this.modalOpen}>
                <use href={sprite + '#icon-exit'}></use>
              </svg>
            </div>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action_exit: obj => {
      dispatch(action.universalModalShowOpenWithTile);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
