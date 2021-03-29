import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Background from '../../components/Background';
import DiagramsContainer from '../../components/Diagrams';
import CurrentPeriod from '../../components/CurrentPeriod/CurrentPeriod';
import styles from './Report.module.css';
import BackToMain from '../../components/BackToMain/BackToMain';
import BackgroundReport from '../../components/BackgroundReport';
import dbOperations from '../../redux/db/db.operations';
import UniversalModal from '../../components/UniversalModal/UniversalModal';

export default function Report() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.db.balance);
  const jwt = useSelector(store => store.user.jwt);

  useEffect(() => {
    dispatch(dbOperations.getBalanceOperation(jwt));
  }, []);

  const changeBalance = e => {
    e.preventDefault();
    if (e.target.balance.value) {
      dispatch(
        dbOperations.addBalanceOperation(
          {
            balance: e.target.balance.value,
          },
          jwt,
        ),
      );
    }
    e.target.balance.value = '';
  };

  let setPlaceholder;
  if (balance === 0) {
    setPlaceholder = '00.00 UAH';
  } else {
    setPlaceholder = `${balance}.00 UAH`;
  }

  return (
    <React.Fragment>
      <Header />
      <UniversalModal />
      <BackgroundReport>
        <div className={styles.wrapper}>
          <BackToMain />
          <div className={styles.balancPeriod}>
            <form className={styles.wrapperBalanc} onSubmit={changeBalance}>
              <p className={styles.balancTitle}>Баланс:</p>
              <input
                name="balance"
                type="text"
                placeholder={setPlaceholder}
                className={styles.balancAmount}
              />
              <button className={styles.balancBtn}>Подтвердить</button>
            </form>
            <CurrentPeriod />
          </div>
        </div>
        <DiagramsContainer />
      </BackgroundReport>
    </React.Fragment>
  );
}
