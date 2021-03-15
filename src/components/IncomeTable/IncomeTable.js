import React from "react";
import styles from "./IncomeTable.module.css";
import { IncomeTableItem } from "./IncomeTableItem";

export function IncomeTable({ costs }) {
    console.log(costs)
  return (
    <table className={styles.costsHistory}>
      <thead>
        <tr>
          <th>ДАТА</th>
          <th>ОПИСАНИЕ</th>
          <th>КАТЕГОРИЯ</th>
          <th>СУММА</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {costs.map((cost) => (
          <IncomeTableItem key={cost.date} item={cost} />
        ))}
      </tbody>
    </table>
  );
}

export default IncomeTable;