import React from "react";
import {useSelector} from 'react-redux'
import styles from "./IncomeTable.module.css";

export function IncomeTable() {

  const costs = useSelector(state => state.db.costs)
  const mapCosts = costs.map((el, index) => {
    return (
      <tr key={index}>
        <td>{el.date}</td>
        <td>{el.describe}</td>
        <td>{el.category}</td>
        <td>{el.sum}</td>
      </tr>
    )
  })

  return (
    <table className={styles.costsHistory}>
      <thead>
        <tr>
          <th>ДАТА</th>
          <th>ОПИСАНИЕ</th>
          <th>КАТЕГОРИЯ</th>
          <th>СУММА</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {mapCosts}
      </tbody>
    </table>
  );
}

export default IncomeTable;