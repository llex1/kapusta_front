import React, { useState, useReducer } from "react";
import { useSelector } from "react-redux";
import styles from "./IncomeForm.module.css";

import actionTypes from "../../redux/costs/costsTypes";
import costReducer from "../../redux/costs/costsReducer";

export default function IncomeForm() {
  const costsSelector = useSelector((state) => state.db.costs);
  const [cost, costState] = useState({});

  const [costs, dispatch] = useReducer(costReducer, []);
  const addCost = (date, describe, category, sum) => {
    const cost = {
      date: date,
      category: category,
      describe: describe,
      sum: sum,
    };
    dispatch({ type: actionTypes.ADD, payload: { cost } });
  };
  // const removeCost = (costId) => {
  //   dispatch({ type: actionTypes.REMOVE, payload: { costId } });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCost(
      new Date(),
      e.target.description.value,
      e.target.category.value,
      e.target.sum.value
    );
  };

  return (
    <div className={styles.incomeEnterWrapper}>
      {/* Date Component */}
      <form onSubmit={handleSubmit}>
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
// console.log(costs);
// state = {
//   date: "",
//   description: "",
//   category: "",
//   sum: "",
// };

// handleChange = (e) => {
//   const { name, value } = e.target;
//   this.setState({
//     [name]: value,
//   });
// };

// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.onAddCosts(
//     this.state.description,
//     this.state.category,
//     this.state.sum
//   );
//   this.setState({
//     date: "",
//     description: "",
//     category: "",
//     sum: "",
//   });
// };

// render() {
// const { description, category, sum } = this.state;
// }
