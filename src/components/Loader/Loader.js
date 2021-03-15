import React from 'react';
import style from './Loader.module.css';
// import Loader from '../../components/Loader/Loader.js';
//! state Лоадера
// state = {
//   loading: true,
// };
//!логіка вимкненя Лоадера
// fetch('http://kapusta.fun/cost')
// .then(respons=>respons.json())
// .then(storage=>{
//   this.setState.loading(false)
// })
//! відображення(рендр) Лоадера
// render({this.setState && <Loader />})

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
