import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "./DatePiker.jsx";
import setDate from "../../redux/calendar/calendarAction";
import sprite from "../../assets/img/sprite.svg";
import style from "./Calendar.module.css";

class DateCalendar extends Component {
  state = {
    date: "",
  };
  componentDidMount() {
    this.props.setDate(moment(Date.now()).format("DD.MM.YYYY"));
  }
  handleTap = (someDate, setSomeDate) => {
    setSomeDate(someDate);
    const result = someDate ? moment(someDate).format("DD.MM.YYYY") : 0;
    this.setState({ date: result });
    this.props.setDate(result);
  };
  render() {
    return (
      <div className={style.calendarContainer}>
        <svg className={style.calendarSVG} width="20" height="20">
          <use href={sprite + "#icon-calendar"} />
        </svg>
        <Calendar onTap={this.handleTap} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDate,
};

export default connect(null, mapDispatchToProps)(DateCalendar);
