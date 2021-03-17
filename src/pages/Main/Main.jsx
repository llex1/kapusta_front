import React from "react";
import { useSelector } from "react-redux";

import routes from "../../routes";
import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Background from "../../components/Background";
import IncomeAndCosts from "../../components/IncomeAndCosts"

function Main(props) {
  // const user = useSelector((state) => state.user);
  // if (user.email && user.jwt) {
  //   props.history.push(routes.costs)
  // } else {
    return (
      <React.Fragment>
        <Header />
        {/* <Modal /> */}
      <IncomeAndCosts/>
        {/* <Background /> */}
      </React.Fragment>
    );
}

export default Main;
