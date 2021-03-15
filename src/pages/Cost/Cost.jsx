import React, { Component, Fragment } from "react";

import Header from "../../components/Header";
import BackgroundAuth from "../../components/BackgroundAuth";
import CurrentPeriod from "../../components/CurrentPeriod";
import IncomeAndCosts from "../../components/IncomeAndCosts";

class Cost extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CurrentPeriod />
        <BackgroundAuth />
        <IncomeAndCosts />
      </Fragment>
    );
  }
}

export default Cost;
