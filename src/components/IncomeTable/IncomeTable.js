import React from "react";
import { connect } from "react-redux";
import styles from "./IncomeTable.module.css";
import { IncomeTableItem } from "./IncomeTableItem";
import costsActions from "../../redux/costs/costsActions";

export function IncomeTable({ costs, onRemoveCost }) {
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
        {costs.map(({ cost, id }) => (
          <IncomeTableItem
            key={id}
            item={cost}
            onRemove={() => onRemoveCost(id)}
          />
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  costs: state.costs.items,
});

const mapDispatchToProps = {
  onRemoveCost: costsActions.removeCost,
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeTable);
