import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page404.module.css';
import notFound from './img/notFound.png';



class Page404 extends Component {
  
    componentPage404 = () => {
    
    };
  
    render() {
      return (
        <div className="NotFoundWrapper">
    
        <br/>
        <br/>
        <br/>
        <h1> Oh Snap!<br/>
          Error Code : 404 not Found! <br/>
          <br/>
    <Link className="link" to='/costs'> To home page</Link>
        </h1>
        <img
        
              src={notFound}
              alt="NotFound"
              aria-label="NotFound"
              className={styles.img}
             
            /> 
    
     
      </div>
    );
      }
    };




  
  
  export default Page404;
  