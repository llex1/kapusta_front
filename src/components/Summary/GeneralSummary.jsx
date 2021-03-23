import styles from "./Summary.module.css";

function general(props) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Сводка</h3>
      <ul className={`${styles.list} ${styles.scrollbar}`}>
        {props.array &&
          props.array.data.map((el) => (
            <li key={el.month} className={styles.listItem}>
              {el.month} <span className={styles.listItemSum}>{el.sum}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default general;
