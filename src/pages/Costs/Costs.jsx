import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "../../routes";
import Header from "../../components/Header";
import BackgroundAuth from "../../components/BackgroundAuth";
import IncomeAndCosts from "../../components/IncomeAndCosts";

function Costs(props) {
  const user = useSelector((state) => state.user);
  if (user.email && user.jwt) {
    return (
      <React.Fragment>
        <Header />
        <BackgroundAuth />
        <IncomeAndCosts />
      </React.Fragment>
    );
  } else {
    return <Redirect to={routes.main} />;
  }
}

export default Costs;
