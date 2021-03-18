import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Calendar from "./DatePiker.jsx";
import setDate from "../../redux/calendar/calendarAction";
import sprite from "../../assets/img/sprite.svg";
import style from "./Calendar.module.css";
import dbOperations from "../../redux/db/db.operations";

class DateCalendar extends Component {
  state = {
    date: "",
  };
  componentDidMount() {
    this.props.setDate(moment(Date.now()).format("DD.MM.YYYY"));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.props.getDateProfitCalendar(this.state.date, this.props.jwt);
    }
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

const mapStateToProps = (state) => ({
  jwt: state.user.jwt,
});

const mapDispatchToProps = {
  setDate,
  getDateCostCalendar: dbOperations.getDateCostCalendar,
  getDateProfitCalendar: dbOperations.getDateProfitCalendar,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateCalendar);
