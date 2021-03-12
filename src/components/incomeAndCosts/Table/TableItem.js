import React from "react";
import sprite from "../../../assets/img/sprite.svg"


export function TableItem({ item }) {
  const { date, description, category, sum } = item;
  console.log(item)
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{sum}</td>
      <td><svg width="14" height="14"><use href={sprite+"#icon-basket"}/></svg></td>
    </tr>
  );
}

export default TableItem;