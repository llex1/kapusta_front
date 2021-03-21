import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../../routes";
import Header from "../../components/Header";
import BackgroundAuth from "../../components/BackgroundAuth";
import UniversalModal from "../../components/UniversalModal/UniversalModal";
import IncomeAndCosts from "../../components/IncomeAndCosts";
import Balance from "../../components/Balance";

function Profit(props) {
  const user = useSelector((state) => state.user);
  if (user.email && user.jwt) {
    return (
      <React.Fragment>
        <Header />
        <UniversalModal />
        <BackgroundAuth />
        <Balance />
        <IncomeAndCosts title="profit" />
      </React.Fragment>
    );
  } else {
    return <Redirect to={routes.main} />;
  }
}

export default Profit;
