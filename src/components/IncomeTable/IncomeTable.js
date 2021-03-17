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
      <thead className={styles.header}>
        <tr className={styles.headerRaw}>
          <th className={styles.date}>ДАТА</th>
          <th className={styles.description}>ОПИСАНИЕ</th>
          <th className={styles.category}>КАТЕГОРИЯ</th>
          <th className={styles.sum}>СУММА</th>
          <th className={styles.delete}> </th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {mapCosts}
        {/* {costs.map((cost) => (
          <IncomeTableItem key={cost.date} item={cost} />
        ))} */}
      </tbody>
    </table>
  );
}

export default IncomeTable;