import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import action from '../../redux/universalModal/universalModal.action.js';
import {Link} from 'react-router-dom';
import sprite from '../../assets/img/sprite.svg';



class Header extends Component {
  modalOpen = e => {
    if (e.target.nodeName === 'U' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
      this.props.action_exit();
    }
    else {console.log(e.target.nodeName);}
  };

  userName = this.props.state.user.email;
  indexR = this.userName.search('@');

   
  name = ()=> {
   if(this.indexR < 8) {
    return(this.userName.slice(0, this.indexR)) }
   else {

    return (this.userName.slice(0, 8+1))
   }
 };

  //name = this.userName.slice(0, this.index)

 componentDidMount= () => {
  //  console.log(this.props.state.user.jwt);
  //  console.log(this.userName.slice(0, this.indexR));
  //  console.log(this.indexR);
   console.log(this.name());

   
   };

  render() {
    return (
      <div className="container">
        <header className={styles.header}>
        <Link to="/costs" alt=" "> 
          <div className={styles.logo}>
            <span className={styles.logoImg}></span>
            <span className={styles.logoText}>Kapusta</span>
          </div>
          </Link>

    {this.props.state.user.jwt && <div className={styles.logoInfo}>
      <div className={styles.bgr}>
        <p className={styles.userName}>U</p>
      </div>

      <p className={styles.logout}>{this.name()}</p>

      <div className={styles.fonVertikal}></div>
      <button className={styles.exit} onClick={this.modalOpen}>
        <u>Выйти</u>
      </button>

      <svg className = {styles.exitMobile} onClick={this.modalOpen} >
      <use href= {sprite+'#icon-exit'} >
   
      </use>
      </svg>
    </div>}
{/* 
      <div>
      <style>
  rect:hover {
    fill: #090;
  }
</style>
<svg>
  <rect fill="#fc0"/>
</svg>
      </div> */}



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
