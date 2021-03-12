import React, { Component } from 'react';
import styles from './Header.module.css';
// import { UserName } from 'react-router-dom';


class Header extends Component {

  // nтут написати умову


  render(){
    return(
      
      <div className="container">
        <header className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoImg}></span>
              <span className={styles.logoText}>Kapusta</span>
            </div>

         <div className="logoInfo">

         <p className={styles.userName}>U</p>
         <p className={styles.logout}>User Name</p>
         <button className={styles.exit}>Выйти</button>

         </div>   


        </header>
      </div>
 
    )
  }

}

export default Header;


// export default UserName;

// class UserName extends React.Component {
// 	render() {
//     // const UserName = <div>User Name</div>;
// 		return <div className={styles.userName}>User Name</div>
      
// 	}
// }

// ReactDOM.render(
// 	<UserName />,
// 	document.getElementById('content')
// );












