import React from "react";
import { useDispatch, useSelector } from "react-redux";

import costOperations from "../../redux/db/db.operations";
import styles from "./IncomeForm.module.css";

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
      {/* Date Component */}
      <form onSubmit={costsAdd}>
        <input
          className={styles.inputs}
          type="text"
          name="description"
          placeholder="Описание товара"
          required
        />
        <select name="category">
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
          className={styles.inputs}
          type="text"
          name="sum"
          placeholder="0.00"
          required
        />
        <button className={styles.button} type="submit">
          Ввод
        </button>
        <button className={styles.button} type="reset">
          Очистить
        </button>
      </form>
    </div>
  );
}
export default IncomeForm;
