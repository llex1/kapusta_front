import React, { useState } from "react";
import DatePicker from "react-datepicker";

import style from "./Calendar.module.css";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onTap }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={(date) => onTap(date, setStartDate)}
      onClick={(date) => onTap(date, setStartDate)}
    ></DatePicker>
  );
};

export default Calendar