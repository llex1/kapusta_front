import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './IncomeForm.module.css';
import sprite from '../../assets/img/sprite.svg';
import Calendar from '../Calendar';

import dbOperations from '../../redux/db/db.operations';

function IncomeForm(props) {
  const dispatch = useDispatch();
  const jwt = useSelector(store => store.user.jwt);
  const date = useSelector(store => store.calendar);
  console.log();
  const costsAdd = e => {
    e.preventDefault();
    const dataToArr = date.split('.');
    const month = +dataToArr[2] * 12 + +dataToArr[1];
    dispatch(
      dbOperations.addCostOperation(
        {
          month: month,
          date: date,
          description: e.target.description.value,
          category: e.target.category.value,
          sum: +e.target.sum.value,
        },
        jwt,
      ),
    );
  };

  const profitAdd = e => {
    e.preventDefault();
    const dataToArr = date.split('.');
    const month = +dataToArr[2] * 12 + +dataToArr[1];
    dispatch(
      dbOperations.addProfitOperation(
        {
          month: month,
          date: date,
          description: e.target.description.value,
          category: e.target.category.value,
          sum: +e.target.sum.value,
        },
        jwt,
      ),
    );
  };

  return (
    <div className={styles.incomeEnterWrapper}>
      <div className={styles.iconLeftWrapper}>
        <button onClick={props.onSwitch} className={styles.iconLeftButton}>
          <svg width="18" height="12" className={styles.iconLeft}>
            <use href={sprite + '#icon-left'} />
          </svg>
        </button>
      </div>
      <div className={`${styles.date} ${styles.input}`}>
        <Calendar />
      </div>
      {props.title === 'costs' ? (
        <form className={styles.form} onSubmit={costsAdd}>
          <div className={styles.inputsWrapper}>
            <input
              className={`${styles.inputProduct} ${styles.input}`}
              type="text"
              name="description"
              placeholder="Описание товара"
              required
            />
            <div className={`${styles.selectWrapper} ${styles.input}`}>
              <select name="category">
                <option disabled>Категории товаров</option>
                <option value="Транспорт">Транспорт</option>
                <option value="Продукты">Продукты</option>
                <option value="Здоровье">Здоровье</option>
                <option value="Алкоголь">Алкоголь</option>
                <option value="Развлечения">Развлечения</option>
                <option value="Все для дома">Все для дома</option>
                <option value="Техника">Техника</option>
                <option value="Коммуналка,связь">Коммуналка,связь</option>
                <option value="Спорт,хобби">Спорт,хобби</option>
                <option value="Образование">Образование</option>
                <option value="Прочее">Прочее</option>
              </select>
              <div className={styles.selectArrow}></div>
            </div>
            <input
              className={`${styles.inputSum} ${styles.input}`}
              type="text"
              name="sum"
              placeholder="0.00"
              required
            />
            <div className={styles.iconWrapper}>
              <svg width="20" height="20" fill="#52555F">
                <use href={sprite + '#icon-calculator'} />
              </svg>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} ${styles.input}`}
              type="submit"
            >
              Ввод
            </button>
            <button className={`${styles.button} ${styles.input}`} type="reset">
              Очистить
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
      {props.title === 'profit' ? (
        <>
          <form className={styles.form} onSubmit={profitAdd}>
            <div className={styles.inputsWrapper}>
              <input
                className={`${styles.inputProduct} ${styles.input}`}
                type="text"
                name="description"
                placeholder="Описание дохода"
                required
              />
              <div className={`${styles.selectWrapper} ${styles.input}`}>
                <select name="category">
                  <option disabled>Категории дохода</option>
                  <option value="ЗП">ЗП</option>
                  <option value="Доп. доход">Доп. доход</option>
                </select>
                <div className={styles.selectArrow}></div>
              </div>
              <input
                className={`${styles.inputSum} ${styles.input}`}
                type="text"
                name="sum"
                placeholder="0.00"
                required
              />
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" fill="#52555F">
                  <use href={sprite + '#icon-calculator'} />
                </svg>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={`${styles.button} ${styles.input}`}
                type="submit"
              >
                Ввод
              </button>
              <button
                className={`${styles.button} ${styles.input}`}
                type="reset"
              >
                Очистить
              </button>
            </div>
          </form>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
export default IncomeForm;
