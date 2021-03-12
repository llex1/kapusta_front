import React from "react";
import styles from "./Table.module.css";
import { TableItem } from "./TableItem";

export function Table({ costs }) {
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
          <TableItem key={cost.date} item={cost} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;