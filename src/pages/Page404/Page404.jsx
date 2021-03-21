import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page404.module.css';
import notFound from './img/notFound.png';
import Header from '../../components/Header/Header';



class Page404 extends Component {
  
    componentPage404 = () => {
    
    };
  
    render() {
      return (
        <>
        <Header/>
          
        <div className={styles.notFoundWrapper}>
    
        <br/>
        <br/>
        <br/>
        <h1 className={styles.title}> Oh Snap!<br/>
          Error Code : 404 not Found! <br/>
          <br/>
    <Link className={styles.linkKart} to='/costs'> To home page</Link>
        </h1>
        <img
        
              src={notFound}
              alt="NotFound"
              aria-label="NotFound"
              className={styles.photo}
             
            /> 
         
      </div>
      </>
    );
      }
    };

  

  
  export default Page404;
  