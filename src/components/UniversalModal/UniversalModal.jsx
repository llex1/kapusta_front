import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './UniversalModal.module.css';
import sprite from '../../assets/img/sprite.svg';
import '../../App.css';
import action from '../../redux/universalModal/universalModal.action';

function UniversalModal(props) {
  const dispatch = useDispatch();

  const modalClose = e => {
    e.stopPropagation();

    if (
      e.target.dataset.id === 'svg' ||
      e.target.dataset.id === 'svgUse' ||
      e.target.id === 'overlay' ||
      e.target.nodeName === 'BUTTON' ||
      e.code === 'Escape'
    ) {
      dispatch(action.universalModalShowClose);
    }
    if (modalTitle && e.target.id === 'go') {
      dispatch(action.universalModalShowAnswerExit);
    }
    if (!modalTitle && e.target.id === 'go') {
      dispatch(action.universalModalShowAnswerDel);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', modalClose);
  });

  const modalTitle = useSelector(state => state.universalModal.modalTitle);
  const modalVisibility = useSelector(
    state => state.universalModal.modalVisibility,
  );

  return (
    <React.Fragment>
      {modalVisibility && (
        <div id="overlay" className={style.modal} onClick={modalClose}>
          <div className={style.modalBody}>
            <svg data-id="svg" className={style.close} onClick={modalClose}>
              <use data-id="svgUse" href={sprite + '#icon-x'} />
            </svg>

            <p className={style.question}>
              {modalTitle === true
                ? 'Вы действительно хотите выйти?'
                : 'Вы уверены?'}
            </p>
            <button id="go" className={`${style.go} go`} onClick={modalClose}>
              Да
            </button>
            <button className={`${style.back} back`} onClick={modalClose}>
              Нет
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default UniversalModal;
