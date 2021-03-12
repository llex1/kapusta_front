import React from 'react';
import styles from './Header.module.css';
import LogoIMG from '../../assets/img/kapusta_main_logo.png';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";



const Header = () => {
 
  return (

<div>
<Router>
<Link to="/" alt=" " className={styles.Logo_link}>
<img src={LogoIMG} className={styles.Logo_IMG} alt="Kapusta" />
</Link>

<UserInfo />


</Router>


</div>

  );
};

export default Header;