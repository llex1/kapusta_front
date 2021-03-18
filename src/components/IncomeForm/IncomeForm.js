import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./IncomeForm.module.css"
import sprite from "../../assets/img/sprite.svg"

import costOperations from "../../redux/db/db.operations";


function IncomeForm() {
  const dispatch = useDispatch();
  const jwt = useSelector((store) => store.user.jwt);

  const costsAdd = (e) => {
    e.preventDefault();
    const currentDate = "2021-03-15"; //! required
    dispatch(
      costOperations.addCostOperation(
        {
          month: 3, //! required
          date: currentDate,
          description: e.target.description.value,
          category: e.target.category.value,
          sum: +e.target.sum.value,
        },
        jwt
      )
    );
  };
    return (
      <div className={styles.incomeEnterWrapper}>
        <div className={`${styles.date} ${styles.input}`}>
          <svg width="20" height="20"><use href={sprite + "#icon-calendar"} /></svg>
          <p className={styles.dateNumbers}>DATE</p>
        </div>
        <form className={styles.form} onSubmit={costsAdd}>
          <div className={styles.inputsWrapper}>
            <input
              className={`${styles.inputProduct} ${styles.input}`}
              type="text"
              name="description"
              placeholder="Описание товара"
              required
                />
            <select className={`${styles.select} ${styles.input}`} name="category" >
                <option>Категории товаров</option>
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
            <input
              className={`${styles.inputSum} ${styles.input}`}
              type="text"
              name="sum"
              placeholder="0.00"
              required
            />
            <svg width="20" height="20"><use href={sprite + "#icon-calculator"} /></svg>
          </div>
          <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.input}`} type="submit">
                    Ввод
          </button>
        <button className={`${styles.button} ${styles.input}`} type="reset">
              Очистить
          </button>
          </div>
        </form>
      </div>
    );
  }
export default IncomeForm;
