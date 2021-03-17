import React from "react";

export function IncomeTableItem({ item }) {
  const { date, description, category, sum } = item;
  console.log(item);
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{sum}</td>
    </tr>
  );
}

export default IncomeTableItem;
