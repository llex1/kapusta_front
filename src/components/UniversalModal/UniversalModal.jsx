import React, { useState, useEffect } from 'react';
import style from './UniversalModal.module.css';
import sprite from '../../assets/img/sprite.svg';
import '../../App.css';

function UniversalModal() {
  const [isOpen, setIsOpen] = useState(true);

  const modalToggle = e => {
    console.log(e.target.nodeName);
    setIsOpen(() => !isOpen);
  };
  useEffect(() => {
    //логіка закриття модалки
    document.getElementById('overlay').addEventListener('click', modalToggle);
  });

  return (
    <React.Fragment>
      {isOpen && (
        <div id="overlay" className={style.modal} onClick={modalToggle}>
          <div className={style.modalBody}>
            <svg className={style.close} onClick={modalToggle}>
              <use href={sprite + '#icon-x'} />
            </svg>
            <p className={style.question}>Вы действительно хотите выйти? </p>

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
