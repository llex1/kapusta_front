import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './UniversalModal.module.css';
import sprite from '../../assets/img/sprite.svg';
import '../../App.css';

function UniversalModal(props) {
  const [isOpen, setIsOpen] = useState(true);

  const modalToggle = e => {
    console.log(e.target);

    if (
      e.target.dataset.id === 'svg' ||
      e.target.dataset.id === 'svgUse' ||
      e.target.id === 'overlay' ||
      e.target.nodeName === 'BUTTON' ||
      e.code === 'Escape'
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    //логіка закриття модалки
    window.addEventListener('keydown', modalToggle);
    // document.getElementById('overlay').addEventListener('click', modalToggle);
  });
  const modalVisibility = useSelector(state => state.user.modalVisibility);
  // const modalVisibility = true;

  return (
    <React.Fragment>
      {isOpen && (
        <div id="overlay" className={style.modal} onClick={modalToggle}>
          <div className={style.modalBody}>
            <svg data-id="svg" className={style.close} onClick={modalToggle}>
              <use data-id="svgUse" href={sprite + '#icon-x'} />
            </svg>

            {/*++ варіант є true або false ++*/}
            <p className={style.question}>
              {modalVisibility === true
                ? 'Вы действительно хотите выйти?'
                : 'Вы уверены?'}
            </p>

            {/*++ варіант передача тексту ++*/}
            {/* <p className={style.question}>{props.message}</p> */}

            {/* <p className={style.question}>Вы уверены?</p> */}
            {/* пропс при розлогіні ? <p>Вы действительно хотите выйти?</p> :
          <p>Вы уверены?</p> */}

            <button className="go" onClick={modalToggle}>
              Да
            </button>
            <button className="back" onClick={modalToggle}>
              Нет
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default UniversalModal;
