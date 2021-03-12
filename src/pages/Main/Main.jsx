import React, { Component, Fragment } from "react";

import Modal from "../../components/Modal";
import Header from "../../components/Header";
import Background from "../../components/Background";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Modal />
        <Background/>
      </Fragment>
    );
  }
}

export default Main;
