import React from "react";
import styles from "./IncomeTable.module.css";
import { IncomeTableItem } from "./IncomeTableItem";

export function IncomeTable({ costs }) {
    console.log(costs)
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
        {costs.map((cost) => (
          <IncomeTableItem key={cost.date} item={cost} />
        ))}
      </tbody>
    </table>
  );
}

export default IncomeTable;