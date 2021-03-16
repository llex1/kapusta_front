import React from "react";
import { useSelector } from "react-redux";
import styles from "./IncomeTable.module.css";
// import IncomeTableItem from "./IncomeTableItem";
// import costsActions from "../../redux/costs/costsActions";

export default function IncomeTable() {
  const costs = useSelector((state) => state.db.costs);
  // console.log(costs);
  // const mapCosts = costs.map((cost) => {
  //   // console.log(cost);
  //   return;
  // });
  // console.log(mapCosts);
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
        {costs.map((cost) => {
          return (
            <tr>
              <td>{cost.date}</td>
              <td>{cost.describe}</td>
              <td>{cost.category}</td>
              <td>{cost.sum}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// const mapStateToProps = (state) => ({
//   costs: state.costs.items,
// });

// const mapDispatchToProps = {
//   onRemoveCost: costsActions.removeCost,
// };
