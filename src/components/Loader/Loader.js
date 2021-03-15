import React from 'react';
import style from './Loader.module.css';

function Loader(props) {
  return (
    <div className={style.loaderEllips}>
      <div className={style.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
