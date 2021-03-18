import React from "react";
import sprite from "../../assets/img/sprite.svg"
import styles from "./IncomeTable.module.css";


export function IncomeTableItem({ item }) {
  const { date, description, category, sum } = item;
  console.log(item);
  return (
    <tr className={styles.bodyRaw}>
      <td className={styles.date}>{date}</td>
      <td className={styles.description}>{description}</td>
      <td className={styles.category}>{category}</td>
      <td className={styles.bodySum}>{"- " + sum + " грн."}</td>
      <td className={styles.delete}><svg width="18" height="18"><use href={sprite+"#icon-basket"}/></svg></td>
    </tr>
  );
}

export default IncomeTableItem;
