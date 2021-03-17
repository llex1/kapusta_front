import React from "react";
import {useSelector} from 'react-redux'
import styles from "./IncomeTable.module.css";
import sprite from "../../assets/img/sprite.svg"

export function IncomeTable() {

  const costs = useSelector(state => state.db.costs)
  const mapCosts = costs.map((el, index) => {
    return (
      <tr className={styles.bodyRaw} key={index}>
        <td className={styles.date}>{el.date}</td>
        <td className={styles.description}>{el.describe}</td>
        <td className={styles.category}>{el.category}</td>
        <td className={styles.bodySum}>{el.sum}</td>
        <td className={styles.delete}><svg width="18" height="18"><use href={sprite+"#icon-basket"}/></svg></td>
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