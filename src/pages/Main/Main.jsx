import React from "react";
// import { useSelector } from "react-redux";

import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Background from "../../components/Background";


function Main(props) {
  // const user = useSelector((state) => state.user);
  // if (user.email && user.jwt) {
  //   props.history.push(routes.costs)
  // } else {
  return (
    <React.Fragment>
      <Header />
      <Modal />
      <Background />
    </React.Fragment>
  );
}

export default Main;
