import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import sprite from "../../assets/img/sprite.svg";
import "moment/locale/ru";
import styles from "./CurrentPeriod.module.css";
import currentMonthAction from "../../redux/currentMonth/currentMonthAction";

export default function CurrentPeriod() {
  const [selectedDate, setSelectedDate] = useState(moment());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentMonthAction.currentMonth(selectedDate.format("MMMM")));
  }, [dispatch, selectedDate]);

  function currMonthName() {
    return selectedDate.format("MMMM");
  }
  function currYear() {
    return selectedDate.format("YYYY");
  }
  function prevMonth() {
    return selectedDate.clone().subtract(1, "month");
  }
  function nextMonth() {
    return selectedDate.clone().add(1, "month");
  }
  return (
    <div className={styles.currentPeriod}>
      <p className={styles.title}>Текущий период:</p>
      <div className={styles.currentBox}>
        <svg width="4" height="10" className={styles.previous} onClick={() => setSelectedDate(prevMonth())}>
          <use href={sprite + "#icon-left2"} />
        </svg>
        <p className={styles.currentDate}>
          {currMonthName()} {currYear()}
        </p>
        <svg width="4" height="10" className={styles.next} onClick={() => setSelectedDate(nextMonth())}>
          <use href={sprite + "#icon-right"} />
        </svg>
      </div>
    </div>
  );
}
