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

         <div className={styles.logoInfo}>
            <div className={styles.bgr}>
         <p className={styles.userName}>U</p>
            </div>
         <p className={styles.logout}>User Name</p>
         <div className={styles.fonVertikal}></div>
         <button className={styles.exit}><u>Выйти</u></button>
             
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












